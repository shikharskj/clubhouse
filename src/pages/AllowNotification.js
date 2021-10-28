import React from 'react';
import style from '../styles/phoneConfirm.module.css';
import { Link } from 'react-router-dom'

const AllowNotification = () => {
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
            <div className="text-center">
                <h1 className="mb-4"> Last, important step! </h1>
                <h1 className="mb-3"> Enable notifications to know when people 
                    are speaking 
                </h1>
                <div className={style.notificationContainer}>
                    <div className="p-3">
                        <h3> "Clubhouse" Would Like to Send You Notifications -</h3>
                        <p> Notifications may include, alerts, sounds and icon badges </p>
                    </div>
                    <div className={style.actionBtn}>
                        <Link exact to="/home" >
                            Don't Allow
                        </Link>
                        <Link exact to="/home" >
                            Allow
                        </Link>
                        <img src="/images/handIcon.svg" className={style.hand_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllowNotification
