import {IntlProvider} from 'react-intl'

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
    signout_button:"Sign out",
    product_list:"View our options",
    product_description:"Description: ",
    product_price: "Price: ",
    button_details: "Details",
    button_cart: "Add to Cart",
    title_product: "Product Details",
    description_product: "Description: ",
    price_product:" Price: ",
    remove_item_cart:"Delete from cart"


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
    signout_button:"Sair",
    product_list:"Veja nossas opções",
    product_description:"Descrição: ",
    product_price: "Preço: ",
    button_details: "Detalhes",
    button_cart: "Adicionar ao carrinho",
    title_product: "Detalhes do Produto",
    description_product:"Descrição: ",
    price_product:" Preço: ",
    remove_item_cart:"Remover do carrinho"

    // 
  }
}

export default function LanguageProvider({children } : {children: React.ReactNode}) {
  return (
    <IntlProvider messages={messages.pt_br} locale="pt-br" defaultLocale="en" >
        {children}
    </IntlProvider>
  )
}