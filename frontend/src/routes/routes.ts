import Home from '../pages/Home';
import Products from '../pages/Products';
import AddProduct from '../pages/AddProduct';
import ProductDetails from '../pages/ProductDetails';
import RegisterUser from '../pages/RegisterUser';
import UsersList from '../pages/UsersList';

interface Route {
  path: string;
  component: React.FC;
}

const routes: Route[] = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/add-recipe', component: AddProduct },
  { path: '/product/:id', component: ProductDetails },
  { path: '/register-user', component: RegisterUser },
  { path: '/users', component: UsersList },
];

export default routes;