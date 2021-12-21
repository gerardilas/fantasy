import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Cart } from "../../media/icons";
import { changeLanguage } from "../../redux/language/languageActionCreator";
import { LanguageString } from "../../redux/language/languageReducer";
import { IRootState } from "../../redux/mainReducer";
import "./header.css";

const Header = () => {
    // const language = useSelector((state: IRootState) => state.language)
    // const dispatch = useDispatch()
    // const handleSwitchSpanish = () => {
    //     dispatch(changeLanguage("es"))
    // }
    // const handleSwitchEnglish = () => {
    //     dispatch(changeLanguage("en"))
    // }
    const totalQty = useSelector((state: IRootState) => state.cart.total_quantity)
    return (
        <div className={"header width-100 center-vertical center-horizontal"}>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/productos"}>Productos</Link>
            <Link to={"/nuestras-tiendas"}>Nuestras tiendas</Link>
            <Link to={"/contacto"}>Contacto</Link>
            <Link to={"/carrito"} className={"center-vertical"}>
                <Cart fill={"#424b54"} className={"width-20px"} />
                <p className={"round margin-0 margin-side-20px padding-side-10px padding-updown-5px contrast-txt-bg letter-spacing-1"}>{totalQty}</p>
            </Link>
            {/* <button className={`simple-button min-width-100px margin-0 main-txt-color ${language === "es" && "contrast-txt-bg"}`} onClick={handleSwitchSpanish}>ES</button>
            <button className={`simple-button min-width-100px margin-0 main-txt-color ${language === "en" && "contrast-txt-bg"}`} onClick={handleSwitchEnglish}>EN</button> */}
        </div>
    );
};

export default Header;
