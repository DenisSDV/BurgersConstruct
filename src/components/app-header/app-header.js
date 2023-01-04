import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import headerStyles from './app-header.module.css'

class AppHeader extends React.Component {
    render() {
        return (
            <header className={headerStyles.header}>
                <div className={headerStyles.container}>
                    <div className={headerStyles.containerButtons}>
                        <div className={`${headerStyles.containerBtn}  mt-4 mb-4 pl-5`} >

                            <BurgerIcon type="primary" />
                            <p className="text text_type_main-small ml-2">Конструктор</p>
                        </div>
                        <div className={`${headerStyles.containerBtn} mt-4 mb-4 ml-2 pl-5 pr-5`}>

                            <ListIcon type="secondary" />
                            <p className="text text_type_main-small text_color_inactive ml-2">Лента заказов</p>

                        </div>
                    </div>

                    <Logo />
                    <div className={`${headerStyles.containerBtn}  mt-4 mb-4`} >
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-small text_color_inactive ml-2">Личный кабинет</p>
                    </div>
                </div>
            </header >
        );
    }
}

export default AppHeader