import React from "react";
import footerClass from "./footer.module.css"

const Footer = ({amount}) => (
    <div className={footerClass.footer}>
        <span className={footerClass.amount}>{`Кол-во элементов: ${amount}`}</span>
    </div>
);

export default Footer;