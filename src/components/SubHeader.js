import React from 'react';
import style from '../styles/explore.module.css'
import { Link } from "react-router-dom";
const SubHeader = (props) => {
    return (
        <div className={style.head}>
            <Link to='/home'>
                <img src="/images/arrow.png" alt="" />
            </Link>
            <h3> {props.pageTitle} </h3>
        </div>
    )
}

export default SubHeader
