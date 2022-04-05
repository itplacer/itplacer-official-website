import React from 'react'
import BtnStyle from "./button.module.css"
import NavStyle from "./style.module.css"
import {MdArrowForwardIos} from "react-icons/md"
import {RiArrowDownSFill,RiSettings4Fill} from "react-icons/ri"
import {SiElasticstack} from "react-icons/si"
import {GrDocumentStore} from "react-icons/gr"
import{GiNetworkBars,GiFlyingTarget} from "react-icons/gi"
import {CgMenu} from "react-icons/cg"
import{MdWork} from "react-icons/md"
const Navbar = () => {
    return (
        <div className={NavStyle.header}>
            <div>
               <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" height={40} alt="" />
                <input type="checkbox"  id={NavStyle["menu-bar"]} />
                <label htmlFor={NavStyle["menu-bar"]} className={NavStyle.menuIcon}><CgMenu/></label>
            </div>
            <nav className={NavStyle.menu}>
            <div className={NavStyle.navlink_btn}>
                <ul>
                    {/* -----------------Programs-------------------- */}
                    <li><a href="#">Programs  <RiArrowDownSFill style={{fontSize:"14px"}} /></a>
                        <ul>
                            <li>
                                <a  style={{color:"black"}}href="#">
                                    <div className={NavStyle.subLink}>
                                        <div><SiElasticstack className={NavStyle.icon}/></div>
                                        <div>
                                           <b className={NavStyle.service}> BECOME A SKILL FRONT END DEVELOPER </b> <br/> 
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusantium sed obcaecati.
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a  style={{color:"black"}} href="#">
                                        <div className={NavStyle.subLink}>
                                        <div><GrDocumentStore className={NavStyle.icon}/></div>
                                        <div>
                                        <b className={NavStyle.service}> BECOME A SKILL FRONT END DEVELOPER </b>   <br/> 
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusantium sed obcaecati.
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a  style={{color:"black"}} href="#">
                                    <div className={NavStyle.subLink}>
                                        <div><RiSettings4Fill className={NavStyle.icon}/></div>
                                        <div>
                                        <b className={NavStyle.service}> BECOME A SKILL FRONT END DEVELOPER </b>   <br/> 
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusantium sed obcaecati.
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a  style={{color:"black"}} href="#">
                                    <div className={NavStyle.subLink}>
                                        <div><MdWork className={NavStyle.icon}/></div>
                                        <div>
                                        <b className={NavStyle.service}> BECOME A SKILL FRONT END DEVELOPER </b>   <br/> 
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusantium sed obcaecati.
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* ------------Hire Crio developers------------------ */}
                    <li>
                        <a href="#">Hire Crio Developers</a>
                    </li>
                    {/* -----------------Project--------------------- */}
                    <li>
                        <a href="#">Project</a>
                    </li>
                    {/* --------------------------Blog------------------ */}
                    <li><a href="#">Blog</a></li>
                    {/* ----------------------Placement------------- */}
                    <li><a href="#">Placement  <RiArrowDownSFill style={{fontSize:"14px"}} /></a>
                        <ul>
                            <li>
                                <a style={{color:"black"}} href="#">
                                    <div className={NavStyle.subLink}>
                                        <div><GiNetworkBars className={NavStyle.icon}/></div>
                                        <div>
                                        <b className={NavStyle.service}> Placement Stats </b>   <br/> 
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusantium sed obcaecati.
                                        </div>
                                    </div>
                                </a>
                             </li>
                            <li>
                                <a style={{color:"black"}} href="#">
                                <div className={NavStyle.subLink}>
                                        <div><GiFlyingTarget className={NavStyle.icon}/></div>
                                        <div>
                                        <b className={NavStyle.service}> Success Stories </b>   <br/> 
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusantium sed obcaecati.
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <button className={BtnStyle.sign_btn}>Sign in  <MdArrowForwardIos style={{fontSize:"13px"}} /></button>
                    <button className={BtnStyle.book_btn}>Book your Free Trial, Now  <MdArrowForwardIos style={{fontSize:"13px"}} /></button>
                    </li>
                </ul>
     

            </div>
        </nav>
        </div>
    )
}

export default Navbar;