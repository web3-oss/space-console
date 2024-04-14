import React from "react";
import {NavLink } from 'react-router-dom';

const SideBar =()=>{
    return(
        <div>
              
                <div id="kt_app_sidebar" className="app-sidebar  flex-column " data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="225px" data-kt-drawer-direction="start"
                        data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">


                
                    <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
                        
                        <a href="">
                            <img alt="Logo" src="assets/media/logos/logo_n.png" className="h-70px app-sidebar-logo-default" />

                            <img alt="Logo" src="assets/media/logos/logo_n.png" className="h-70px app-sidebar-logo-minimize" />
                        </a>
                         
                        
                         
                    </div>
                
                    <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
                         
                        <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper">
                            
                            <div id="kt_app_sidebar_menu_scroll" className="scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu"
                            data-kt-scroll-offset="5px" data-kt-scroll-save-state="true">
                                 
                                <div className="menu menu-column menu-rounded menu-sub-indention fw-semibold fs-6" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
                                    
                                 
                                                                   <div className="menu-item">
                                                                        
                                                                       <NavLink className="menu-link"
                                                                           to="/" activeclassname="active">
                                                                           
                                                                           <span className="menu-title">Ethereum</span>
                                                                       </NavLink>
                                                                       <NavLink className="menu-link"
                                                                           to="/Bnb" >
                                                                           
                                                                           <span className="menu-title">Bnb</span>
                                                                       </NavLink>
                                                                       <NavLink className="menu-link"
                                                                           to="/Matic" >
                                                                           
                                                                           <span className="menu-title">Matic</span>
                                                                       </NavLink>
                                                                       <NavLink className="menu-link"
                                                                           to="/Atom" >
                                                                           
                                                                           <span className="menu-title">Atom</span>
                                                                       </NavLink>
                                                                       
                                                                   </div>
                                                                   
                                      
                                </div>
                                 
                            </div>
                             
                        </div>
                        
                    </div>
                  
                </div>
              
        </div>
    )
}

export default SideBar;