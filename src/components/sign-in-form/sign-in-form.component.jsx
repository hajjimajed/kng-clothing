import { async } from "@firebase/util";
import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

import { SignUpContainer, H, ButtonsContainer } from "./sign-in-form.styles";
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const dispatch = useDispatch();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart());
    }

    const handleSubmit = async (event) => {
        event.preventDefault();



        try {
            dispatch(emailSignInStart(email, password));
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password': alert("incorrect password");
                    break
                case 'auth/user-not-found': alert("incorrect email");
                    break
                default: console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    return (

        <SignUpContainer>
            <H>Already have an account</H>
            <span>Sign in</span>

            <form action="" onSubmit={handleSubmit}>


                <FormInput label="Email" required type="email" onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name="password" value={password} />

                <ButtonsContainer>

                    <Button type='submit' >Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle} >Google sign in</Button>

                </ButtonsContainer>
            </form>
        </SignUpContainer>

    )
}

export default SignInForm;