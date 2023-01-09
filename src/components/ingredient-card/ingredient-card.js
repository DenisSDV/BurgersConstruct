import React from 'react';
import ingredientStyles from './ingredient-card.module.css'
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components'


const IngredientCard = ({ name, price, image }) => {
    return (
        <div className={ingredientStyles.container}>
            <img src={image} alt="" className={ingredientStyles.picture} />
            <div className={`${ingredientStyles.price} mt-4 mb-4`}>
                <p className="text text_type_digits-default mr-2">{price}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className={`${ingredientStyles.name} text text_type_main-default`}>{name}</p>
            <Counter count={1} size="default" className={ingredientStyles.counter} />
        </div>
    )
}

export default IngredientCard