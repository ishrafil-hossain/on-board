import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <p>Side Navbar</p>
            <div>
                <p>Top Header</p>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;