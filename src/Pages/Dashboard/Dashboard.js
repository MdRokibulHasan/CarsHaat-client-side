import userEvent from '@testing-library/user-event';
import React from 'react';
// import './Dashboard.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddProducts from './AddProducts/AddProducts';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrder from './ManageOrder/ManageOrder';
import Payment from './Payment/Payment';
import UserOrder from './UserOrder/UserOrder';
import UserReview from './UserReview/UserReview';
const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut, user } = useAuth();

    return (
        <div>
            <div className="container-fluid fixed-top bg-dark py-3">
                <div className="row">
                    <div className="col-xl-2 col-sm-3 col-0 collapse show sidebar">
                        <div><h3 style={{ color: "white" }}>Dash Borad</h3></div>
                    </div>
                    <div className="col px-5 ms-5" style={{ textAlign: 'right' }}>

                        <div>
                            <button onClick={logOut} >Log Out</button>
                        </div>

                    </div>

                </div>

            </div>

            <div className="container-fluid">
                <div className="row vh-100 flex-nowrap">
                    <div className="col-xl-2 col-sm-3 col-auto collapse show sidebar bg-dark text-white px-0">

                        <ul className="nav flex-column flex-nowrap text-truncate navbar-dark bg-dark mx-auto position-fixed pt-2 vh-100" id="sidebar" style={{ marginTop: 70 }}>
                            <NavLink to="/home">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/home"><i className="fa fa-home"></i><span className="ml-1 d-none d-sm-inline">Home</span></a>
                                </li>
                            </NavLink>
                            <NavLink to={`${url}`}>
                                <li className="nav-item">
                                    <a className="nav-link"><i className="fa fa-cog"></i><span className="ml-1 d-none d-sm-inline">Dashboard</span></a>
                                </li>
                            </NavLink>
                            {admin ? <NavLink to={`${url}/makeadmin`}>
                                <li className="nav-item">
                                    <a className="nav-link" ><i className="fa fa-star"></i><span className="ml-1 d-none d-sm-inline">Make Admin</span></a>
                                </li>
                            </NavLink>
                                : <NavLink to={`${url}/userorder`}>
                                    <li className="nav-item">
                                        <a className="nav-link" ><i className="fa fa-star"></i><span className="ml-1 d-none d-sm-inline">My Order</span></a>
                                    </li>
                                </NavLink>}

                            {admin ? <NavLink to={`${url}/addproducts`}>
                                <li className="nav-item">
                                    <a className="nav-link" ><i className="fa fa-heart"></i><span className="ml-1 d-none d-sm-inline">Add Products</span></a>
                                </li>
                            </NavLink>
                                : <NavLink to={`${url}/payment`}>
                                    <li className="nav-item">
                                        <a className="nav-link" ><i className="fa fa-heart"></i><span className="ml-1 d-none d-sm-inline">Payment</span></a>
                                    </li>
                                </NavLink>}
                            {admin ? <NavLink to={`${url}/manageorder`}>
                                <li className="nav-item">
                                    <a className="nav-link" ><i className="fa fa-heart"></i><span className="ml-1 d-none d-sm-inline">Manage Order</span></a>
                                </li>
                            </NavLink>
                                : <NavLink to={`${url}/userreview`}>
                                    <li className="nav-item">
                                        <a className="nav-link" ><i className="fa fa-heart"></i><span className="ml-1 d-none d-sm-inline">Set Review</span></a>
                                    </li>
                                </NavLink>}

                        </ul>
                    </div>
                    <div className="col py-3">


                        <Switch>
                            <Route exact path={path}>
                                <DashboardHome></DashboardHome>
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            </Route>
                            <Route path={`${path}/userorder`}>
                                <UserOrder></UserOrder>
                            </Route>
                            <AdminRoute path={`${path}/makeadmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute path={`${path}/addproducts`}>
                                <AddProducts></AddProducts>
                            </AdminRoute>
                            <Route path={`${path}/userreview`}>
                                <UserReview></UserReview>
                            </Route>
                            <AdminRoute path={`${path}/manageorder`}>
                                <ManageOrder></ManageOrder>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;