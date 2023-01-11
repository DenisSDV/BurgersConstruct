import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './app-header.module.css'


const AppHeader = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.containerButtons}>
                    <div className='mt-4 mb-4 pl-5' >
                        <a href="#" className={style.containerBtn}>
                            <BurgerIcon type="primary" />
                            <p className="text text_type_main-small ml-2">Конструктор</p>
                        </a>
                    </div>
                    <div className={`${style.containerBtn} mt-4 mb-4 ml-2 pl-5 pr-5`}>
                        <a href="#" className={style.containerBtn}>
                            <ListIcon type="secondary" />
                            <p className="text text_type_main-small text_color_inactive ml-2">Лента заказов</p>
                        </a>
                    </div>
                </div>
                <Logo />
                <div className={`${style.containerBtn}  mt-4 mb-4`} >
                    <a href="#" className={style.containerBtn}>
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-small text_color_inactive ml-2 mr-5">Личный кабинет</p>
                    </a>
                </div>
            </div>
        </header >
    );
}

export default AppHeader


/*

const AppHeader = () => {
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.containerButtons}>
                    <div className='mt-4 mb-4 pl-5' >
                        <a href="#" className={style.containerBtn}>
                            <BurgerIcon type="primary" />
                            <p className="text text_type_main-small ml-2">Конструктор</p>
                        </a>
                    </div>
                    <div className={`${style.containerBtn} mt-4 mb-4 ml-2 pl-5 pr-5`}>
                        <a href="#" className={style.containerBtn}>
                            <ListIcon type="secondary" />
                            <p className="text text_type_main-small text_color_inactive ml-2">Лента заказов</p>
                        </a>
                    </div>
                </div>
                <Logo />
                <div className={`${style.containerBtn}  mt-4 mb-4`} >
                    <a href="#" className={style.containerBtn}>
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-small text_color_inactive ml-2">Личный кабинет</p>
                    </a>
                </div>
            </div>
        </header >
    );
}

*/