import React, { Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';

import "./myOrders.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Typography from '@mui/material/Typography';

import MetaData from "../layout/MetaData";
import LaunchIcon from '@mui/icons-material/Launch';

const MyOrders = () => {
  const dispatch = useDispatch();

const navigate = useNavigate();
  const { loading, error, orders } = useSelector((state) => state.myOrders);
  const { user ,isAuthenticated} = useSelector((state) => state.user);

  // console.log(user)

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        // return params.getCellValue(params.id, "status") === "Delivered"
        //   ? "greenColor"
        //   : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Link to={`/order/${params.id}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows = [];

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });
    
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticated === false) {
      navigate("/login");
    }

    dispatch(myOrders());
  }, [isAuthenticated,error, dispatch,navigate]);

  return (
    <Fragment>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> 
      <MetaData title={`${user.name} - Orders`} />

      {loading || !isAuthenticated ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid id="DataGrid"
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />

          <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
