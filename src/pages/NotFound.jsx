import { React, useState, useEffect } from 'react';
import { Outlet, Link, useParams } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found">
            <h2>Oops, this page does not exist! Click <Link to="/">here</Link> to go back to the landing page.</h2>           
        </div>
    )
}

export default NotFound;