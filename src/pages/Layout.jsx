import { Outlet, Link } from "react-router-dom";
import { React, useState, useEffect } from 'react'

const Layout = () => {

    return (
        <div className="layout">
            <header className="layout-header flex-cont-col">
                <h1 className="layout-title">CREATORVERSE</h1>
                <div className="layout-btn-cont flex-cont-row">
                    <Link to="/"><button className="layout-btn">VIEW ALL CREATORS</button></Link>
                    <Link to="/new"><button className="layout-btn">ADD A CREATOR</button></Link>
                </div>
            </header>
            <main className="layout-main">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;