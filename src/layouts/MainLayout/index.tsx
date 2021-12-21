import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { IRootState } from "../../redux/mainReducer";

const MainLayout = () => {
    return (
        <div>
            <Loader />
            <Header />
            <div className={"min-height-85"}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
