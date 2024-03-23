import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

// Translated messages in French with matching IDs to what you declared
const messages = {
  // myMessage: "Aujourd'hui, nous sommes le {ts, date, ::yyyyMMdd}",
  en: {
    // signup 
    signup: "Sign Up",
    name_label: "Name:",
    password_label: "Password:",
    signup_button: "Register",
    name_placeholder: "Type your name",
    password_placeholder: "Type your password",
    signup_button_login: "Already have a user",
    login: "Login",
    login_button: "Enter",
    login_button_signup: "Register Here",
    signout_button:"Sign out"
    // 
  },
  pt_br: {
    // signup 
    signup: "Inscreva-se",
    name_label: "Nome:",
    password_label: "Senha:",
    signup_button: "Registrar",
    name_placeholder: "Digite seu nome",
    password_placeholder: "Digite sua senha",
    signup_button_login: "Ja tenha uma conta",
    login: "Entrar",
    login_button: "Entre",
    login_button_signup: "Registre-se Aqui",
    signout_button:"Sair"
    // 
  }
}

export default function LanguageProvider({children } : {children: React.ReactNode}) {
  return (
    <IntlProvider messages={messages.en} locale="pt-br" defaultLocale="en">
        {children}
    </IntlProvider>
  )
}