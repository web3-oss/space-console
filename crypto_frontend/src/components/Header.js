import React  from "react";
import {NavLink } from 'react-router-dom';
const Header = () => {
     
    return (
        <div>


            <div id="kt_app_header" className="app-header " data-kt-sticky="true" data-kt-sticky-activate="{default: true, lg: true}"
                data-kt-sticky-name="app-header-minimize" data-kt-sticky-offset="{default: '200px', lg: '0'}"
                data-kt-sticky-animation="false">


                <div className="app-container  container-fluid d-flex align-items-stretch justify-content-between "
                    id="kt_app_header_container">


                    <div className="d-flex align-items-center d-lg-none ms-n3 me-1 me-md-2" title="Show sidebar menu">
                        <div className="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_sidebar_mobile_toggle">
                            <i className="ki-duotone ki-abstract-14 fs-2 fs-md-1"><i className="bi bi-list fs-2x text-warning"></i></i>
                        </div>
                    </div>

                    <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                        <NavLink to="#" className="d-lg-none">
                            <img alt="Logo" src="assets/media/logos/d_logo.png" className="h-30px" />
                        </NavLink >
                    </div>

                    {/* <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper" style={{background: 'white'}}>

                        <div  className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2">
                            <nav className="menu menu-1">
                                <ul>
                                    <li className="link-wrapper"><NavLink  to="/" activeclassname="active">Ethereum</NavLink></li>
                                    <li className="link-wrapper"><NavLink  to="/Tron">Tron</NavLink></li>  
                                    
                                </ul>
                            </nav>

                        </div> 
                         
                         

                        <div className="app-navbar flex-shrink-0">



                             

                        </div>

                    </div> */}

                </div>

            </div>


        </div>
    );
}

export default Header;