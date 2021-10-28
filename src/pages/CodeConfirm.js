import React from 'react';
import style from '../styles/phoneConfirm.module.css';
import { Link } from 'react-router-dom';

const CodeConfirm = () => {
    return (
        <div className={style.PhoneConfirmContainer}>
            <div className="mb-5"> 
                <img className={style.LogoImage} 
                    src="https://www.joinclubhouse.com/static/img/img_app_icon_mandiie.77b142636e2e.png"
                alt="logo" />
                <img className={style.Logo} 
                    src="https://blog.clubhouse.com/content/images/2021/07/Clubhouse-Lockup-3.png"
                alt="" />
            </div>
            <Link exact to="/invite" className={style.backBtn}>
                <img src="/images/arrow.png" alt="" />
            </Link>
            <div className="text-center">
                <h1 style={{width: '100%', maxWidth: '200px',
                    marginBottom: '1em'}}> Ok, check your texts - 
                    we sent you a verification code!    
                </h1>
                <input type="text"
                    style={{
                        width: '100%', 
                        border: 'none',
                        textAlign: 'center',
                        outline: 'none',
                    }}
                    placeholder="Enter a dummy code ..."
                />
                <p className="mt-2">Didn't recive it?
                    <span> Tap to resend </span>    
                </p>
            </div>
            <Link exact to="/allow_notification" 
                className="primaryBtn my-3 d-flex align-items-center"
            >
                Next <img src="/images/nextArrowIcon.svg" 
                className="ms-3" alt="" />
            </Link>
        </div>
    )
}

export default CodeConfirm
