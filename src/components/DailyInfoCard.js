import React from 'react';
import style from '../styles/dailyInfoCard.module.css';
import data from '../data/dailyCard.json';

const DailyInfoCard = () => {
    console.log("data", data);
    return (
        <div className={style.dailyCard}>
            {
                data.map( item => {
                return (
                    <div>
                        <span className="a">
                            {item.time}
                        </span>
                        <div>
                            <span className="a"> {item.title} </span>
                            <p> {item.description} </p>
                        </div>
                    </div>
                )})
            }
        </div>
    )
}

export default DailyInfoCard
