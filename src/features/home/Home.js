import React from 'react';
import './home.scss';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { setReduxType, setReduxNumber } from '../../app/redux';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

function ToggleButtonSelection(props) {
    return (
        <ToggleButtonGroup
            className={'home-form-'+props.name}
            color="primary"
            value={props.value}
            exclusive
            onChange={props.handleChange}
        >
            {
                props.array.map((value, index) => 
                    <ToggleButton id={props.name} name={props.name} key={index} value={value}>{value}</ToggleButton>
                )
            }
        </ToggleButtonGroup>
    )
}

function Home() {
    const numbers = ["10", "20", "30"];
    const types = ["Chrono", "Max"];
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            type: '',
            number: '',
            name: ''
        },
        onSubmit: values => {
            dispatch(setReduxNumber(values.number));
            dispatch(setReduxType(values.type));
            navigate("/game");
        },
    });

    return (
        <div className="home">
            <form onSubmit={formik.handleSubmit}>
                <ToggleButtonSelection array={numbers} name="number" value={formik.values.number} handleChange={formik.handleChange}/>
                <ToggleButtonSelection array={types} name="type" value={formik.values.type} handleChange={formik.handleChange}/>
                <TextField className="home-form-name" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} label="Username" variant="outlined" />
                <Button variant="contained" type="submit">Play</Button>
            </form>
        </div>
    );
}

export default Home;
