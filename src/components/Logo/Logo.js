import React from "react";

import logoUrl from "../../assets/images/logo.png";
import classes from "./Logo.module.css";
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoUrl} alt={"doctorlogo"}/>
    </div>
)

export default Logo;