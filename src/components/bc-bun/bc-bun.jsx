import React from 'react';
import style from './bc-bun.module.css';
import { CurrencyIcon, LockIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';


// Компонент верхняя/нижняя булка в разделе Burger Constructor

const BcBun = ({ name, price, image, type, text }) => {
    return (
        <div className={`${(type === "top") ? style.bunTop : style.bunBottom} mt-4 mb-4 ml-8 pl-6`} >
            <img src={image} alt="" className={style.image} />
            <p className='ml-5 text text_type_main-default'>{name} ({text})</p>
            <p className=" ml-5 mr-2 text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
            <div className="ml-5 mr-8" >
                <LockIcon type="secondary" />
            </div>
        </div>

    )
}


BcBun.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default BcBun