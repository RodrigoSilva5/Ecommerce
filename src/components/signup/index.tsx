import { FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import TextInput from '../forms/TextInput';
import { FormattedMessage, useIntl } from 'react-intl';
import { SignUpContainer } from './styles';
import { Title } from '../../styles/title';
import { Button } from '../../styles/button';
interface SignUpFormEntry {
    email: string;
    password: string;
    name: string
}

export default function SignUp() {
    const {signup} = useAuth();
    const navigate = useNavigate();

    const intl = useIntl();

    const form = useFormik<SignUpFormEntry>({
        initialValues: {
            email: '',
            name: "", 
            password: ''

        },
        // validationSchema,
        onSubmit: async (values, { setFieldError }) => {
            try {
                await signup!(values)
                navigate("/")
                console.log(values)

            } catch (ex) {
                alert(ex);
                setFieldError('password', 'Usuário inválido');
            }
        }
    });

    return (
        <SignUpContainer>
            <Title>
                <FormattedMessage
                          id="signup"
                          defaultMessage="Sign Up:"
                />
            </Title>

            <div>
                <FormikProvider value={form}>
                    <TextInput
                        name="email"
                        label="E-mail"
                        placeholder="exemplo@exemplo.com"
                    />
                    <TextInput
                        type="name"
                        name="name"
                        label={intl.formatMessage({id: 'name_label', defaultMessage: "name"})}
                        placeholder={intl.formatMessage({id: "name_placeholder", defaultMessage:"type your name"})}
                    />
                    <TextInput
                        type="password"
                        name="password"
                        label={intl.formatMessage({id: 'password_label', defaultMessage: "Password:"})}
                        placeholder={intl.formatMessage({id: "password_placeholder", defaultMessage:'type your passe'})}
                    />
                    <div>
                        <Button onClick={form.submitForm}>
                            <FormattedMessage id='signup_button'/>
                        </Button>
                        <Button onClick={() => navigate("/login")}>
                            <FormattedMessage id="signup_button_login" />
                        </Button>
                    </div>
                </FormikProvider>
            </div>
        </SignUpContainer>
    );
}
