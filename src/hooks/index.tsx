import AuthProvider from "./auth";
import LanguageProvider from "./intl";
import QueryProvider from "./query";
import ThemeProvider from "./theme";

export default function Providers({children}:{children: React.ReactNode}) {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <AuthProvider>
                    <QueryProvider>
                        {children}    
                    </QueryProvider>
                </AuthProvider>
            </ThemeProvider>
        </LanguageProvider>
    )
}