import AuthProvider from "./auth";
import CartProvider from "./cart";
import LanguageProvider from "./intl";
import QueryProvider from "./query";
import {ThemeProvider} from "./theme";

export default function Providers({children}:{children: React.ReactNode}) {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <AuthProvider>
                    <QueryProvider>
                        <CartProvider>
                            {children}    
                        </CartProvider>
                    </QueryProvider>
                </AuthProvider>
            </ThemeProvider>
        </LanguageProvider>
    )
}