import React from 'react'
import style from "../styles/welcome.module.css";
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className={style.WelcomeContainer}>
            <div className={style.LogoContainer}>
                <img className={style.LogoImage} 
                src="https://www.joinclubhouse.com/static/img/img_app_icon_mandiie.77b142636e2e.png"
                 alt="logo" />
                <img className={style.Logo} 
                src="https://blog.clubhouse.com/content/images/2021/07/Clubhouse-Lockup-3.png"
                  alt="" />
            </div>
            
            <img className={style.WelcomePoster} src="https://www.joinclubhouse.com/static/img/homepage/hero_lg.6c049473202f.png"
             alt="social audio app" />
            <div className={style.WelcomeSubtitle}>
                <img src="https://www.joinclubhouse.com/static/img/homepage/icon_stars.af07f514011e.png"
                 alt="" />
                Meet incredible people </div>
            <div className={style.WelcomeInfo}>
                <p> 
                    We are working hard to get clubhouse ready for everyone!
                    While we wrap up the finishing touches, we're adding people 
                    gradually to make sure nothing breaks
                </p>
                <p> 
                    Anyone can join with an invite from an existing user- or 
                    reserve your username and we'll text you if you have a friend
                    on the app who can let you in. We are so grateful you're here
                    and can't wait to have you join!
                </p>
                <p>
                    Paul, abhinav & the clubhouse team...
                </p>
            </div>
            <div className={style.actionBtn}>
                <Link exact to="/invite" 
                    className="primaryBtn d-flex align-items-center mb-3">
                    Get your username {' '}
                </Link>
                <Link exact to="/invite">
                    Have an invite text? Sign-in!
                </Link>
            </div>
        </div>
    )
}

export default Welcome
