import React from 'react';
import style from './bc-ingredient.module.css'
import { CurrencyIcon, DragIcon, DeleteIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';

// Компонент ингредиент(содержимое, наполнение) булки в разделе Burger Constructor

const BcIngredient = ({ name, price, image }) => {
    return (
        <div className={`${style.ingredientBlock} mt-4`}>
            <div className='mr-2'>
                <DragIcon type="primary" />
            </div>
            <div className={style.ingredient}>
                <img src={image} alt="" className={`${style.image} ml-6  mr-5`} />
                <p className={`${style.name} text text_type_main-default`}>{name}</p>

                <p className="ml-5 mr-2 text text_type_digits-default">{price}</p>

                <div className='mr-5'>
                    <CurrencyIcon type="primary" />
                </div>
                <div className="mr-8" >
                    <DeleteIcon type="primary" />
                </div>
            </div>
        </div>
    )
}

BcIngredient.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
};



export default BcIngredient