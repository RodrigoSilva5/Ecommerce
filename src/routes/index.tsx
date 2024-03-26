import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/home';
import PrivateRoute from './PrivateRoute';
import SignUpPage from '../pages/signUp'
import LoginPage from '../pages/login';
import ProductDetailsPage from '../components/productDetails';
import { ProductsScreen } from '../pages/productsScreen';
import { CartScreen } from '../components/cart';


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        ),
        children: [
            {path: "/", element: <ProductsScreen/>},
            {path: '/product/:productId',element: <ProductDetailsPage />},
            {path: '/cart',element: <CartScreen/>},

        ]
    },
    {
        path: '/Home',
        element: <Navigate to="/" replace />,
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
