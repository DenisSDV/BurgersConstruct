import React from 'react';
import data from '../../utils/data'
import style from './burger-constructor-list.module.css';
import BcIngredient from '../bc-ingredient/bc-ingredient'
import BcBun from '../bc-bun/bc-bun';

// Компонент отвечает за главную(верхнюю) часть 
// компонента более высокого уровня BurgerConstructor (правая сторона главной страницы)
// отображает верхнюю булку, набор ингредиентов и нижнюю булку
const BurgerConstructorList = () => {
    const bcBun = data.find((ingr) => (ingr.type === "bun"));
    return (
        <div className='mt-25'>
            <BcBun type='top' text='верх'
                image={bcBun.image_mobile} name={bcBun.name} price={bcBun.price} />
            <div className={`${style.ingredients}  custom-scroll`}>
                {
                    data.map((ingredient) => (
                        (ingredient.type !== "bun") ?
                            <BcIngredient
                                key={ingredient._id}
                                name={ingredient.name}
                                price={ingredient.price}
                                image={ingredient.image} /> : null))
                }
            </div>
            <BcBun type='bottom' text='низ'
                image={bcBun.image_mobile} name={bcBun.name} price={bcBun.price} />
        </div>
    )
}

export default BurgerConstructorList