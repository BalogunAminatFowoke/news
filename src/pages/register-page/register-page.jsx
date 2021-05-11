import react from 'react';
import './register-page.css';
import InputForm from '../../Components/InputForm/input-form';

const RegisterPage = ({ label, type, ...otherProps }) => {
    return (
        <>
            <div>
                <InputForm
                    label="Name"
                    type="text"
                />

                <InputForm
                    label="Email"
                    type="email"
                />

                <InputForm
                    label="Password"
                    type="password"
                />
            </div>

        </>
    )
}

export default RegisterPage;