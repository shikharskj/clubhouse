import React from 'react';
import exploreStyle from '../styles/explore.module.css';
import style from'../styles/profile.module.css';
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai';

const Profile = () => {
    return (
        <>
            <div className={style.profileContainer}>
                <div className={exploreStyle.header}>
                    <div className={`${exploreStyle.head} text-end mb-0`}>
                        <Link to='/home'>
                            <img src="/images/arrow.png" alt="" 
                                className={exploreStyle.arrow_icon}
                            />
                        </Link>
                        <div className={style.actionBtn}>
                            <BsAt />
                            <BsUpload />
                            <AiOutlineSetting />
                        </div>
                    </div>
                </div>
                <img src="/images/my.jpeg" 
                    className={style.profile_img} alt="" 
                />
                <h4> Abhinav Sharma </h4>
                <p> @techGeek </p>
                <div className={style.follow}>
                    <p>
                        <span> 0 </span> followers
                    </p>
                    <p> 
                        <span> 51 </span> following
                    </p>
                </div>
                <button> Add a bio </button>
                <div className='mb-4'>  
                    <button className='mb-0'>
                        <AiOutlineTwitter /> Add Twitter
                    </button>
                    <button>
                        <AiOutlineInstagram /> Add Instagram
                    </button>
                </div>
                <div className={style.nominated}>
                    <img src="/images/my.jpeg" alt="" />
                    <div>
                        <p> Joined 29-Oct-2021 </p>
                        <p> Nominated by <span> Darshan Oswal </span> </p>
                    </div>
                </div>
                <p> Member of </p>
                <button className={style.addMemberBtn}>
                    <BsPlus />
                </button>
            </div>
        </>
    )
}

export default Profile
