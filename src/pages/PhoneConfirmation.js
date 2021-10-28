import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from '../styles/phoneConfirm.module.css';
import PhoneInput from "react-phone-number-input";

const PhoneConfirmation = () => {
    const [value, setValue] = useState();

    return (
        <div className={style.PhoneConfirmContainer}>
            <div className={style.LogoContainer}>
                <img className={style.LogoImage} 
                src="https://www.joinclubhouse.com/static/img/img_app_icon_mandiie.77b142636e2e.png"
                 alt="logo" />
                <img className={style.Logo} 
                src="https://blog.clubhouse.com/content/images/2021/07/Clubhouse-Lockup-3.png"
                  alt="" />
            </div>
            <Link exact to="/" className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>
            <h1> Enter you phone </h1>
            <PhoneInput international 
                defaultCountry='IN' value={value}
                onChange={setValue}
            />
            <p> By entering your number, you're agreeing to our {" "}
                <span>
                    Terms of Service and Privacy Policy.  
                </span>
                Thanks!
            </p>
            <Link exact to="/code_confirm" 
                className="primaryBtn my-3 d-flex align-items-center">
                Next <img src="/images/nextArrowIcon.svg" 
                className="ms-3" alt="" />
            </Link>
        </div>
    )
}

export default PhoneConfirmation
