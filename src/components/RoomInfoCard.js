import React, {useState, useEffect} from 'react';
import style from '../styles/roomCard.module.css';
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs'
import data from '../data/roomCard.json'

const RoomInfoCard = (props) => {
    return (
        <div>
            <h2> Room Card </h2>
            {
                data.map( item => {
                    return (
                        <div>
                            <div>
                                <div className={style.roomCardContainer}>
                                    <h6> {item.title} </h6>
                                    <h2> {item.sub_title} </h2>
                                    <div className={style.roomMembers}>
                                        <div>
                                            <img src={item.src1} alt="" />
                                            <img src={item.src2} alt="" />
                                        </div>
                                        <div>
                                            {item.members.map( person => {
                                            return (
                                                <p> {person.first_name} {person.last_name} <BsChatDots /> </p>
                                            )})}
                                            <p className="d-flex align-items-center">  
                                                <span className="me-2"> 1.8 </span>
                                                <BsFillPersonFill />
                                                <span className="mx-2"></span>{" "}
                                                <span className="me-2"> 5  </span> <BsChatDotsFill />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RoomInfoCard
