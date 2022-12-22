import React from 'react';
import {Link, useLocation} from "react-router-dom";
import classes from './css/PathGid.module.css';
import {ArrowForwardIos} from "@mui/icons-material";

const PathGid = () => {
    const location = useLocation();

    const urls = location.pathname.split('/')
    return (
        <div style={location.pathname === "/" ? {display: 'none'} : {display: "block"}} className={classes.pathGid}>
            <Link to="/">Home</Link>{urls.slice(1, urls.length - 1).map((e, k) => <div key={k}><ArrowForwardIos/><Link to={`/${e}/`}>{e}</Link></div>)}
        </div>
    );
};

export default PathGid;