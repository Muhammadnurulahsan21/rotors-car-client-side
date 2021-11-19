import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="bg-eee pb-5 custom-margin">
      <div className="custom-margin">
        <div className="pb-5">
          <div className="dashboard-frist-banner text-light text-center">
            <h2 className="dashboard-text ">Dashboard</h2>
          </div>
        </div>
      </div>
      <div className="container py-4 ">
        <div className="row bg-white rounded shadow p-4">
          <div className="col-12 col-md-2">
            <div>
            <Link
              to={`${url}/manage-orders`}
              className="py-2 border-bottom cursor border-dark"
            >
              Manage Orders
            </Link>
            </div>
            <div>
            <Link
              to={`${url}/manage-admin`}
              className="py-2 border-bottom cursor border-dark"
            >
              Manage Admin
            </Link>
            </div>
            <div>
            <Link
              to={`${url}/add-new-product`}
              className="py-2 border-bottom cursor border-dark"
            >
              Add New Product
            </Link>
            </div>
            <div>
            <Link
              to={`${url}/payment`}
              className="py-2 border-bottom cursor border-dark"
            >
              Payment
            </Link>
            </div>
            <div>
            <Link
              to={`${url}/payment`}
              className="py-2 border-bottom cursor border-dark"
            >
              Payment
            </Link>
            </div>
          </div>
          <button>Sign Out</button>
          <div className="col-12 col-md-10 border-start">
            <Switch>
              <Route exact path={path}></Route>
              <Route path={`${path}/payment/:appointmentId`}></Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
