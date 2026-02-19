import React from "react";
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <div className="Footer">

                <div className="HOME">
                    <img src="./HOME_logo.svg" alt="" />
                </div>
                <div className="comp">
                    <div className="cols">
                        <li id="head"><a href="">LINKS</a></li>
                        <li><a href="">Products</a></li>
                        <li><a href="">Solution</a></li>
                        <li><a href="">Indutries</a></li>
                        <li><a href="">Insights</a></li>
                    </div>

                    <div className="cols">
                        <li id="head"><a href="">INFORMATION</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Desclaimer</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">FAQ</a></li>
                    </div>

                </div>

            </div>

            <div className="metaFooter">

            </div>
        </>
    );
}

export default Footer;