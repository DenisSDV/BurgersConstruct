import React from 'react';
import data from '../../utils/data'
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import style from './burger-constructor-confirm.module.css'

// Компонент отвечает за нижнюю часть BurgerConstructor, общая сумма и кнопка подтверждения
const BurgerConstructorConfirm = () => {

    // Вычисляем общую стоимость по логике: 
    // цена всех ингредиентов, кроме булок + самая первая булка*2 (тк верх+низ)
    const onlyIngredients = data.filter((ingr) => (ingr.type !== "bun"));
    const onlyFirstBun = data.find((ingr) => (ingr.type === "bun"));
    const costIngredients = onlyIngredients.reduce((sum, currIngr) => sum + currIngr.price,
        onlyFirstBun.price * 2)

    return (
        <div className={`${style.register} mt-10`}>
            <div className={`${style.cost} mr-10`} >
                <p className="text text_type_digits-medium mr-2">{costIngredients}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button htmlType="button" type="primary" size="medium">
                Оформить заказ
            </Button>
        </div>
    )
}

export default BurgerConstructorConfirm