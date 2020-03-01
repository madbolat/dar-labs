import React, { useState } from 'react';
import FormInput from '../ui-kit/FormInput';
import './UserForm.css'

export default () => {

    // const inputName = useRef(null);
    const [formData, setFormData] = useState({
        email: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter your email please'}
            ],
            isValid: false,
        },
        password: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter your password please'},
                {name: 'minLength', message: 'Minimum length is 6'}
            ],
            isValid: false,
        }
    });

    // const [inputName, setInputName] = useState('');
    // const [inputPassword, setInputPassword] = useState('');
    // const [formError, setFormError] = useState({});

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        console.log(formData);
    }

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        const updatedControl = {...formData[name]};
        updatedControl.value = value;

        for (let rule of updatedControl.rules) {
            switch(rule.name) {
                case 'required':
                    updatedControl.isValid = !!updatedControl.value;
                    break;
                case 'minLength':
                    updatedControl.isValid = updatedControl.value && updatedControl.value.length >= 6;
                    break;
            }

            if (!updatedControl.isValid) {
                updatedControl.error = rule.message;
                break;
            }
        }
        setFormData({
            ...formData,
            [name]: updatedControl,
        })
    }

    return (
        <div className="UserForm">
            <form onSubmit={handlerSubmit} noValidate>
                <FormInput 
                    name="email"
                    required={true}
                    placeholder="Enter your email"
                    label="E-mail"
                    onInputChange={inputChangeHandler}
                />
                <div className="form-control">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        onBlur={inputChangeHandler} 
                        onChange={inputChangeHandler} 
                        placeholder="Enter password" 
                        className="form-input" 
                        required />
                    <div className="form-input-error">
                        { !formData['password'].isValid ? formData['password'].error : '' }
                    </div>
                </div>
                <div className="form-control">
                    <button type="submit" className="form-button">Submit</button>
                </div>
            </form>
        </div>
    );
}