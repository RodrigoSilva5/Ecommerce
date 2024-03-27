// criar o contexto

import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from 'react';
import { User } from '../interfaces/user';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { redirect } from 'react-router-dom';

interface AuthCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User | null;
    signIn?(credentials: AuthCredentials): void;
    signOut?(): void;
    signup?(credentials: SignUpParams): Promise<void> | undefined;
    login?(credendtials: LoginParams): void;
}
interface LoginParams {
    email: string,
    password: string
}

interface SignUpParams {
    email: string;
    password: string;
    name: string,
}
interface AccessToken {
    acessToken: string | null
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// definir o provider
export default function AuthProvider({
    children
}: {
    children: React.ReactNode;
}) {
    const [user, setUser] = useState<User | null>(() => {
        const user = localStorage.getItem('user');

        if (!user) {
            return null;
        }

        const userJSON = JSON.parse(user);
        return userJSON;
    })

    const [, setAccessToken ] = useState<AccessToken | null>(() => {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            return null;
        }

        const accessTokenJSON = JSON.parse(accessToken);
        return accessTokenJSON;

    });

    const signup = useCallback( async ({email, password, name}: SignUpParams) => {
                // SALT should be created ONE TIME upon sign up
        const id = uuidv4();
        const formData = {
            id:id,
            name:name, 
            email: email,
            password: password
        }
        try {
            const { data } = await axios.post(`http://localhost:3000/users`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            localStorage.setItem('user', JSON.stringify(data.user));
            localStorage.setItem('token', JSON.stringify(data.accessToken));
            setUser(data.user);
            setAccessToken(data.accessToken)
            
        } catch (error) {
            console.error(error);
        }

    }, [])

    const login = useCallback( async({email, password} : LoginParams ) => {
        const formData = {
            email:email,
            password: password
        }
        try {
          const { data } = await axios.post('http://localhost:3000/login', formData, {
            headers:{
                "Content-Type": "application/json"
            }
          });
          
          localStorage.setItem('user', JSON.stringify(data.user));
          localStorage.setItem('token', JSON.stringify(data.accessToken));
          setUser(data.user);
          setAccessToken(data.accessToken)
        } catch (ex) {
            console.log(ex)
        }
    }, [])
    
    const signOut = useCallback(() => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setAccessToken(null)
        setUser(null);
        redirect('/')
    }, []);


    // memoize
    const providerData = useMemo(() => {
        return {
            user,
            signup,
            login,
            signOut
        };
    }, [user]);

    return (
        <AuthContext.Provider value={providerData}>
            {children}
        </AuthContext.Provider>
    );
}

// criar o nosso hook
export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error('useAuth must be used within an AuthProvider');

    return context;
}


// {
//     email: "7b8d15c3-10a4-4e68-b485-3f4c054f5aee",
//     id: "alice.johnson@example.com",
//     name: "Alice Johnson",
//     password: "123456"
// }