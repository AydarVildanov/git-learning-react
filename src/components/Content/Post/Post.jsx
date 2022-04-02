import React from 'react';
import './Post.css'
import woman_picture from "../../../img/content/woman.png";
import nature_picture from "../../../img/content/nature.png";

const Post = (props) => {
    return (
        <div className="content__all-posts-item">
            <div className="content__item-header">
                <div className="content__person-img">
                    <img src={props.profile_img} alt=""/>
                </div>
                <div className="content__person-info">
                    <div className="content__person-nick">{props.nickname}</div>
                    <div className="content__posted-time">{props.time}</div>
                </div>
            </div>
            <div className="content__item-body">
                <div className="content__post-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias amet architecto doloremque enim error est, fuga labore libero magnam mollitia nihil odit quam quod reiciendis sed totam veritatis, voluptatibus.
                </div>
                <div className="content__post-img">
                    <img src={nature_picture} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Post;