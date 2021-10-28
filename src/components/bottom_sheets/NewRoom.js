import React, {useState} from 'react';
import style from '../../styles/roomDetail.module.css'
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai';
import { BsMicMuteFill, BsMicFill } from 'react-icons/bs';

const NewRoom = (props) => {
    const [micMuteVisible, setMicMuteVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState(true);
    const card = props.cardDetail;
    return (
        <>
            <div className={style.roomDetailContainer}>
                <div className={style.head}>
                    <div className="d-flex align-items-center">
                        <a href="#"
                            onClick={ () => props.setSheetVisible(false)}
                        >
                            <img src="/images/arrow.png"
                            className={style.arrow_icon} alt="" />
                        </a>
                        <span> Hallway </span>
                    </div>
                    <div>
                        <AiOutlineFile />
                        <img src="/images/my.jpeg"
                        className={style.profile_img} alt="" />
                    </div>
                </div>
                <div className={style.roomDetailCard}>
                    <div className="d-flex align-items-center justify-content-between flex-wrap" 
                    style={{padding: "o.5em 1em"}}>
                        { card.members.map( item => {
                            return (
                                <div className={style.memberContainer}>
                                    { micMuteVisible ? (
                                        <div className={style.audio_icon}>
                                            <BsMicMuteFill />
                                        </div>
                                    ) : " " }
                                    <img className="mb-1" src={item.src} alt="" />
                                    <p>  
                                        <span> * </span>
                                        {item.first_name}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                        {/* Footer  */}
                <div className={style.footer}>
                        <button onClick={() => {
                            props.setSheetVisible(false);
                        }}>
                            <img src="/images/hand-peace.png" alt="" />
                            <span> Leave quietly </span>
                        </button>
                        <div>
                            <button>
                                <AiOutlinePlus />
                            </button>
                            <button>
                                <img src="/images/stopHandIcon.png" alt="" />
                            </button>
                            <button onClick={ () => setMicMuteVisible(!micMuteVisible)}>
                                {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
                            </button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default NewRoom
