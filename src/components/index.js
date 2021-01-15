import { BrowserRouter as Router, NavLink } from "react-router-dom"


function Index() {
    return(
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/doctor">Doctor List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/doctor/new">Add new doctor</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/organization">Organization List</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/organization/new">Add new organization</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Index