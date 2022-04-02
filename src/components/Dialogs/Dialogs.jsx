import React from 'react';
import './Dialogs.css'
import avatar1 from './../../img/dialogs/avatar1.svg'

const Dialogs = () => {
    return (
        <div className={"dialogs"}>
            <div className="dialogs__people">
                <div className="dialogs__people-body">
                    <div className="dialogs__items">
                        <div className="dialogs__item">
                            <div className="dialogs__profile-img">
                                <img src={avatar1} alt=""/>
                            </div>
                            <div className="dialogs__info">
                                <div className="dialogs__nickname">Barry Walker</div>
                                <div className="dialogs__message">Hello MEN...</div>
                            </div>
                            <div className="dialogs__message-time">
                                <span>18:56</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dialogs__for-border">
                <div className="dialogs__border-right"/>
            </div>
            <div className="dialogs__correspondence">
                <div>ahahahahaha you are dumb</div>
                <div>Shut UP f*cking NIGGA</div>
            </div>
        </div>
    );
}

export default Dialogs;