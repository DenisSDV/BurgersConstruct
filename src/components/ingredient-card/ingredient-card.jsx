import React from 'react';
import style from './ingredient-card.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

// Компонент отображающий карточку ингредиента в левой части главного окна,
// дочка BurgerIngredients
const IngredientCard = ({ name, price, image }) => {
    return (
        <div className={style.container}>
            <img src={image} alt="" className={style.picture} />
            <div className={`${style.price} mt-4 mb-4`}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${style.name} text text_type_main-default`}>{name}</p>
            <Counter count={1} size="default" extraClass={`${style.counter} m-1`} />
        </div>
    )
}

IngredientCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};

export default IngredientCard