import { async } from "@firebase/util";
import { useState, useContext } from "react";

import './sign-up-form.styles.scss'

import Button from "../button/button.component";

import FormInput from "../form-input/form-input.component";

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const { setCurrentUser } = useContext(UserContext)

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);

            setCurrentUser(user);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();


        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('email is already exist')
            }
            else {
                console.log("user creation encountered an error", error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (

        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>

            <form action="" onSubmit={handleSubmit}>

                <FormInput label="Display Name" required type="text" onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

                <FormInput label="Confirm Password" required type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />

                <Button buttonType='' type='submit' >Sign Up</Button>
            </form>
        </div>

    )
}

export default SignUpForm;