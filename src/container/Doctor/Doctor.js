// import { FormControl, InputBase, InputLabel, MenuItem, NativeSelect, Select, styled, TextField } from "@material-ui/core";
// import { useState, useEffect } from "react";

  

const Doctor = (props) => {
    // const [city, setCity] = useState("");
    // const [specification, setSpecification] = useState("");
    return(
        <div className="container">
            <div className="search-bar">
                <h3>
                    Find Doctor
                </h3>
                <div>
                
                    <div className="search-field" style={{ display: "block"}}>
                        <select className="select">
                            <option value="0">Select City:</option>
                            <option value="1">Moulvibazar</option>
                        </select>
                        <select className="select-middle">
                            <option value="0">Select Specification:</option>
                            <option value="1">Audi</option>
                        </select>
                        <input type="text" className="search-text" placeholder="Doctors"></input>
                        <button className="search-button">Search</button>
                    </div>

                </div>
            </div>
            <div className="doctor-list">
                <button className="button-1">Button1</button>
                <button className="button-2">Button2</button>
                <button className="button-3">Button3</button>
                <button className="button-4">Button4</button>
            </div>
        </div>
    )
}

export default Doctor;