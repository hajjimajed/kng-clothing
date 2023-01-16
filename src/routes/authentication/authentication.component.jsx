import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import { AutheticationContainer } from './authentication.styles';

const Authetication = () => {





    return (
        <AutheticationContainer>

            <SignInForm />

            <SignUpForm />

        </AutheticationContainer>
    )
}

export default Authetication;