import React from 'react';
import InputForm from '../InputForm/input-form';
import CustomButton from '../Button/button';
import './signin.css';
import { signInWithGoogle } from '../../firebase.utils';
//import { data } from '.././../login-details';

const SignIn = ({ routeChange, onChange, onSubmit, type, required, label, ...otherProps }) => {
    return (
        <>
            <p style={{ textAlign: "center", fontSize: "20px", color: "red" }}>
                <b>
                    Welcome To  BBC NEWS; First Hand Information
                    </b>
            </p>
            <div className="sign-in-container">

                <form onSubmit={onSubmit}>
                    <InputForm
                        label='Email'
                        type='email'
                        name='email'
                        required
                        onChange= {onChange}
                    />

                    <InputForm
                        label='Password'
                        type='password'
                        name='password'
                        required
                        onChange= {onChange}
                    />

                    <InputForm
                        label='PhoneNumber'
                        type='number'
                        name= 'number'
                        required
                        onChange= {onChange}
                    />

                    <CustomButton
                        label='SignIn'
                        onClick={routeChange}
                    
                    />

                    <CustomButton
                        label='SignIn With Google'
                        onClick={signInWithGoogle}
                    />

                    



                </form>
            </div>
        </>
    )
}

export default SignIn;