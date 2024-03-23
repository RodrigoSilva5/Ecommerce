import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';
import PrivateRoute from './PrivateRoute';
import SignUpPage from '../pages/signUp'
import LoginPage from '../pages/login';


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        )
    },
    {
        path: '/signUp',
        element: <SignUpPage />
    },
    {
        path: '/login',
        element: <LoginPage />
    },
]);

export default router;
