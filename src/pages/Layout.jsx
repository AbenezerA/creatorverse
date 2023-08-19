import { Outlet, Link } from "react-router-dom";
import { React, useState, useEffect } from 'react'

const Layout = () => {

    return (
        <div className="layout">
            <header className="layout-header flex-cont-col">
                <h1 className="layout-title">CREATORVERSE</h1>
                <div className="layout-btn-cont flex-cont-row">
                    <button className="layout-btn">VIEW ALL CREATORS</button>
                    <button className="layout-btn">ADD A CREATOR</button>
                </div>
            </header>

            <Outlet />
        </div>
    );
};

export default Layout;