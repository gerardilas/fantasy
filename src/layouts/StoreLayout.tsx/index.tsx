import React from "react";
import { Outlet } from "react-router-dom";
import CategorySelector from "../../components/CategorySelector";

const StoreLayout = () => {
    return (
        <div>
            <div
                className={
                    "width-1200px max-width-80 margin-side-auto min-height-85"
                }>
                <div className={"flex"}>
                    <div className={"width-20"}>
                        <CategorySelector />
                    </div>
                    <div className='width-80'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreLayout;
