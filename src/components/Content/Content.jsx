import React from 'react';
import './Content.css'
import Post from './Post/Post'
import man_picture from '../../img/nav/man.png'
import woman_picture from "../../img/content/woman.png";
import avatar_men from '../../img/content/avatar-men.jpeg'

const Content = () => {
    return (
        <div className={'content'}>
            <div className="content__post">
                <div className="content__body">
                    <div className="content__profile-img">
                        <img src={man_picture} alt=""/>
                    </div>
                    <input type="text" placeholder="Что нового Mr. BarbieJohn?" className="content__post-input"/>
                    <div className="content__post-btn">
                        <div className="content__post-btn-box">
                            <span>Запостить!</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="content__all-posts">
                <div className="content__all-posts-items">
                    <Post profile_img={woman_picture} nickname={'Mr. BarbieJohn'} time={'6 часов назад'}/>
                    <Post profile_img={avatar_men} nickname={'Ocho Cincho'} time={'26 лет назад'}/>
                </div>
            </div>
        </div>
    );
}

export default Content;