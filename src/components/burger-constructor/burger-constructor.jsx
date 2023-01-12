import React from 'react';
import style from './burger-constructor.module.css';
import BurgerConstructorList from '../burger-constructor-list/burger-constructor-list'
import BurgerConstructorConfirm from '../burger-constructor-confirm/burger-constructor-confirm'


// Главный компонент (правая часть главной страницы) BurgerConstructor
const BurgerConstructor = () => {
    return (
        <div className={style.container}>
            {/* Здесь два элемента, один - набор выбранных ингредиентов, другой - кнопка и подпись*/}
            <BurgerConstructorList />
            <BurgerConstructorConfirm />
        </div>
    );
}


export default BurgerConstructor