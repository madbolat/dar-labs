import React, { useState } from 'react';
import { connect } from 'react-redux';

//My imports
import FormInput from '../ui-kit/FormInput';
import FormTextarea from '../ui-kit/FormTextarea';

import { createPost } from '../redux/effects/createPost.effects';

const PostForm = ({ createPost }) => {
    const now = new Date();
    const currentDate = `${now.getFullYear()}-${(now.getMonth()>9) ? now.getMonth() : "0"+now.getMonth()}-${(now.getDate()>9) ? now.getDate() : "0"+now.getDate()}`;

    const [postData, setPostData] = useState({
        title: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter title please'}
            ],
            isValid: false
        }, 
        body: {
            value: '',
            error: '',
            rules: [
                {name: 'required', message: 'Enter body please'}
            ],
            isValid: false
        }, 
        createdAt: {
            value: currentDate,
            error: '',
            rules: [
            ],
            isValid: false
        }
    })

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
        const newPost = {
            id: 2,
            title: postData.title.value,
            body: postData.body.value,
            createdAt: postData.createdAt.value,
        }
        createPost(newPost);
    }

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        const updatedControl = {...postData[name]};
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
        setPostData({
            ...postData,
            [name]: updatedControl,
        })
    }

    return (
        <div className="AddPost">
            <form onSubmit={handlerSubmit}>
                <FormInput 
                    type="text"
                    label="Title"
                    name="title"
                    required={true}
                    placeholder="Post title"
                    onInputChange={inputChangeHandler} />
                <FormTextarea 
                    label="Body"
                    name="body"
                    required={true}
                    onInputChange={inputChangeHandler} />
                <FormInput
                    type="date"
                    label="Created at"
                    name="createdAt"
                    required={false}
                    onInputChange={inputChangeHandler} />
                <div className="form-control">
                    <button type="submit" className="form-button">Add post</button>
                </div>
            </form>
        </div>
    )
}

// connect (store, dispatch)
export default connect(null, { createPost })(PostForm);