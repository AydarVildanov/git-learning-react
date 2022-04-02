import React from 'react';
import './Nav.css'
import home_icon from '../../img/nav/home.svg'
import people_icon from '../../img/nav/people.svg'
import news_icon from '../../img/nav/news.svg'
import profile_icon from '../../img/nav/profile.svg'
import settings_icon from '../../img/nav/settings.svg'
import man_picture from '../../img/nav/man.png'


const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__person">
                <div className="nav__person-body">
                    <div className="nav__person-img">
                        <img src={man_picture} alt=""/>
                    </div>
                    <div className="nav__person-info">
                        <div className="nav__person-nickname">
                            Mr. BarbieJohn
                        </div>
                        <div className="nav__login">
                            @badbarbie__
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav__home">
                <div className="nav__home-body">
                    <div className="nav__items">
                        <div className="nav__item">
                            <div className="nav__item-img">
                                <img src={home_icon} alt=""/>
                            </div>
                            <div className="nav__item-text">Главная</div>
                        </div>
                        <div className="nav__item">
                            <div className="nav__item-img">
                                <img src={people_icon} alt=""/>
                            </div>
                            <div className="nav__item-text">Люди</div>
                        </div>
                        <div className="nav__item">
                            <div className="nav__item-img">
                                <img src={news_icon} alt=""/>
                            </div>
                            <div className="nav__item-text">Новости</div>
                        </div>
                        <div className="nav__item">
                            <div className="nav__item-img">
                                <img src={profile_icon} alt=""/>
                            </div>
                            <div className="nav__item-text">Профиль</div>
                        </div>
                        <div className="nav__item">
                            <div className="nav__item-img">
                                <img src={settings_icon} alt=""/>
                            </div>
                            <div className="nav__item-text">Настройки</div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;