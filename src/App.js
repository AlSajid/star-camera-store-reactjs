import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';
import Footer from './components/Footer/Footer';
import Products from './components/Products/Products';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Pay from './components/Pay/Pay';
import MyOrder from './components/MyOrder/MyOrder';
import Review from './components/Review/Review';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import AddAProduct from './components/AddAProduct/AddAProduct';
import ManageProducts from './components/ManageProducts/ManageProducts';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/explore">
                        <Products></Products>
                    </Route>
                    <PrivateRoute exact path="/purchase/:id">
                        <Purchase></Purchase>
                    </PrivateRoute>
                    <PrivateRoute exact path="/pay">
                        <Pay></Pay>
                    </PrivateRoute>
                    <PrivateRoute exact path="/myOrder">
                        <MyOrder></MyOrder>
                    </PrivateRoute>
                    <PrivateRoute exact path="/review">
                        <Review></Review>
                    </PrivateRoute>
                    <PrivateRoute exact path="/makeAdmin">
                        <MakeAdmin></MakeAdmin>
                    </PrivateRoute>
                    <PrivateRoute exact path="/AddAProduct">
                        <AddAProduct></AddAProduct>
                    </PrivateRoute>
                    <PrivateRoute exact path="/manageProducts">
                        <ManageProducts></ManageProducts>
                    </PrivateRoute>
                    <PrivateRoute exact path="/manageAllOrders">
                        <ManageAllOrders></ManageAllOrders>
                    </PrivateRoute>
                    <PrivateRoute exact path="/review">
                        <Review></Review>
                    </PrivateRoute>
                    <Route exact path="/login">
                        <Login></Login>
                    </Route>
                    <Route exact path="/register">
                        <Register></Register>
                    </Route>
                </Switch>
                <Footer></Footer>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
