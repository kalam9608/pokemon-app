import React from 'react'
import {Link} from "react-router-dom";


export class Navbar extends React.Component {


    render() {
        return (
            <>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:"sticky",top:"0px" ,zIndex:"1"}}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">Pokemon</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    {/* <Link to="/">Home</Link> */}

                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                    {/* <Link to="/about">About</Link> */}
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>

            </>
        )
    }
}

export default Navbar
