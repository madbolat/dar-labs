import React, { useState } from 'react';
import { Input } from 'antd';

export default (props) => {

    const [error, setError] = useState('');
    const [value, setValue] = useState('');

    const inputChangeHandler = (e) => {
        const value = e.target.value;
        console.log(value);
        setValue(value);

        if(props.required) {
            setError(!value ? 'Please fill this field' : '');
        }

        if(props.onInputChange) {
            props.onInputChange(e);
        }
    }

    return (
        <div className="form-control">
            <label>{props.label ? props.label : ''}:</label>
            <Input 
                type={props.type ? props.type : 'text'} 
                name={props.name} 
                onBlur={inputChangeHandler} 
                onChange={inputChangeHandler} 
                placeholder={props.placeholder ? props.placeholder : ''} 
                required={props.required} 
                size="large"
            />
            <div className="form-input-error">
                { error ? error : '' }
            </div>
        </div>

    )
}