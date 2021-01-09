

function Index() {
    return(
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu1">Menu 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                </li>
            </ul>
            <div className="tab-content">
            <div className="tab-pane container active" id="home">...</div>
            <div className="tab-pane container fade" id="menu1">...</div>
            <div className="tab-pane container fade" id="menu2">...</div>
            </div>
        </div>
    )
}

export default Index