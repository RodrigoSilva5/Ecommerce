import { FormikProvider, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import TextInput from '../forms/TextInput';
import { FormattedMessage, useIntl } from 'react-intl';
import { LoginContainer } from './styles';
import { Title } from '../../styles/title';
import { Button } from '../../styles/button';

interface LoginFormEntry {
    email: string;
    password: string;
}

export default function Login() {
    const {login} = useAuth();
    const navigate = useNavigate();

    const intl = useIntl();

    const form = useFormik<LoginFormEntry>({
        initialValues: {
            email: '',
            password: ''
        },
        // validationSchema,
        onSubmit: async (values, { setFieldError }) => {
            try {
                await login!(values)
                navigate("/")
                console.log(values)

            } catch (ex) {
                alert(ex);
                setFieldError('password', 'Usuário inválido');
            }
        }
    });

    return (
        <LoginContainer>
            <Title>
                <FormattedMessage
                          id="login"
                          defaultMessage="Login"
                />
            </Title>

            <div>
                <FormikProvider value={form}>
                    <TextInput
                        name="email"
                        label="E-mail:"
                        placeholder="exemplo@exemplo.com"
                    />
                    <TextInput
                        type="password"
                        name="password"
                        label={intl.formatMessage({id: 'password_label', defaultMessage: "Password:"})}
                        placeholder={intl.formatMessage({id: "password_placeholder", defaultMessage:'type your passe'})}
                    />
                    <div>
                        <Button onClick={form.submitForm}>
                            <FormattedMessage id='login_button'/>
                        </Button>
                        <Button onClick={() => navigate("/signup")}>
                            <FormattedMessage id="login_button_signup" />
                        </Button>
                    </div>
                </FormikProvider>
            </div>
        </LoginContainer>
    );
}
