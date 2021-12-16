// import { FormControl, InputBase, InputLabel, MenuItem, NativeSelect, Select, styled, TextField } from "@material-ui/core";
// import { useState, useEffect } from "react";

import picture from "./../../assets/images/propic.jpg"

const Doctor = (props) => {
    // const [city, setCity] = useState("");
    // const [specification, setSpecification] = useState("");
    return(
        <div className="container">
            <div className="search-bar row m-0">
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
            <div className="doctor-list row m-0">
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile">
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center",paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile">
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center", paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile"> 
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center",  paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile"> 
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center", paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile"> 
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center", paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile"> 
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center", paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile"> 
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center", paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile"> 
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center", paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile"> 
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center", paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-lg-3" style={{paddingBottom: "24px"}}>
                    <div className="profile"> 
                        <div className="profilepicture">
                            <img src={picture} style={{width:"100%", height:"200px", borderTopRightRadius: "5px", borderTopLeftRadius: "5px"}} alt="Logo" />
                        </div>
                        <div style={{textAlign:"center", paddingBottom:"10px", minHeight: "200px"}}>
                            <div>Shishir Chokrobarti</div>
                            <span>MBBS, FCBS ( Medicine )</span>
                            <p>MAG Osmani Medical College</p>
                            <button className="button-2">View Profile</button>
                            <button className="button-1">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row"> 
                <button className="button-1">Button1</button>
                <button className="button-2">Button2</button>
                <button className="button-3">Button3</button>
                <button className="button-4">Button4</button>
            </div> 
        </div>
    )
}

export default Doctor;