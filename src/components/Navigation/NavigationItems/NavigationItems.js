import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>
                BurgerBuilder
            </NavigationItem>
            <NavigationItem link="/add/doctor" >Add Doctor</NavigationItem>
            <NavigationItem link="/doctors" >Doctors</NavigationItem>
        </ul>
    )
}

export default NavigationItems;