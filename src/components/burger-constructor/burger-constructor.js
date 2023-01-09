import React from 'react';
import constructorStyles from './burger-constructor.module.css';
import data from '../../utils/data'
import { CurrencyIcon, LockIcon, DragIcon, DeleteIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'


const BcIngredient = ({ name, price, image }) => {
    return (
        <div className={`${constructorStyles.ingredient} mt-4`}>
            <div className='mr-2'>
                <DragIcon type="primary" />
            </div>
            <img src={image} alt="" className={`${constructorStyles.image} ml-6`} />
            <p className='ml-5 text text_type_main-default' style={{ width: 254 }}>{name}</p>
            <p className=" ml-5 mr-2 text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
            <div className="ml-5 mr-8" >
                <DeleteIcon type="primary" />
            </div>

        </div>
    )
}

const BcBun = ({ name, price, image, type, text }) => {
    return (
        <div className={`${(type === "top") ? constructorStyles.buntop : constructorStyles.bunbottom} mt-4 mb-4 ml-8 pl-6`} >
            <img src={image} alt="" className={constructorStyles.image} />
            <p className='ml-5 text text_type_main-default'>{name} ({text})</p>
            <p className=" ml-5 mr-2 text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
            <div className="ml-5 mr-8" >
                <LockIcon type="secondary" />
            </div>
        </div>

    )
}

const BurgerConstructorList = () => {
    let bcBun = data.find((ingr) => (ingr.type === "bun"));
    return (
        <div className='mt-25'>
            <BcBun type='top' text='верх'
                image={bcBun.image_mobile} name={bcBun.name} price={bcBun.price} />
            <div className={`${constructorStyles.ingredients}  custom-scroll`}>
                {
                    data.map((ingredient) => (
                        (ingredient.type !== "bun") ?
                            <BcIngredient
                                key={ingredient._id}
                                name={ingredient.name}
                                price={ingredient.price}
                                image={ingredient.image} /> : ""))
                }
            </div>
            <BcBun type='bottom' text='низ'
                image={bcBun.image_mobile} name={bcBun.name} price={bcBun.price} />
        </div>
    )
}

const ConfirmButton = () => {
    const onlyIngredients = data.filter((ingr) => (ingr.type !== "bun"));
    const onlyFirstBun = data.find((ingr) => (ingr.type === "bun"));

    const costIngredients = onlyIngredients.reduce((sum, currIngr) => sum + currIngr.price, 0)
    const costBun = onlyFirstBun.price * 2

    return (
        <div className={`${constructorStyles.register} mt-10`}>
            <div className={`${constructorStyles.cost} mr-10`} >
                <p className="text text_type_digits-medium mr-2">{costIngredients + costBun}</p>
                <CurrencyIcon type="primary" />
            </div>
            <Button htmlType="button" type="primary" size="medium">
                Оформить заказ
            </Button>
        </div>
    )
}


class BurgerConstructor extends React.Component {


    render() {
        return (
            <div className={constructorStyles.container}>
                {/* Здесь два элемента, один - конструктор, другой - кнопка и подпись*/}
                <BurgerConstructorList />
                <ConfirmButton />
            </div>
        );
    }
}

export default BurgerConstructor