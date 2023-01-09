import React from 'react';
import ingredientStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import data from '../../utils/data'
import IngredientCard from '../ingredient-card/ingredient-card';


/* Карточки ингредиентов - контейнер, выводящий набор карточек
            в зависимости от типа ингредиентов */
const IngredientCards = (props) => {
    return (<div className={`${ingredientStyles.cards} ml-4 mr-2`}>
        {
            data.map((ingredient) => (
                (ingredient.type === props.listType) ?
                    <IngredientCard
                        key={ingredient._id}
                        name={ingredient.name}
                        price={ingredient.price}
                        image={ingredient.image_large} /> : ""
            )
            )
        }

    </div>)
}

const IngredientsList = (props) => {
    return (<div className={ingredientStyles.ingredientlist}>
        {props.children}
    </div>
    )
}

// Блок отображающий набор конкретных ингридиентов
const Ingredients = (props) => {
    return (
        <div className="mt-10">
            <p className='text text_type_main-medium'>{props.text}</p>
            {/* Карточки ингредиентов - контейнер, выводящий набор карточек
            в зависимости от типа ингредиентов */}
            <IngredientCards listType={props.type} />
        </div>
    )
}

// Часть макета страницы, отвечающая за вывод информации об ингредиентах 
class BurgerIngredients extends React.Component {
    render() {
        return (
            <div className={ingredientStyles.container}>
                {/* Заголовок */}
                <p className="text text_type_main-large mt-10">Соберите бургер</p>

                {/* Закладки (табы) */}
                <div style={{ display: 'flex' }} className="mt-5">
                    <Tab value="rolls" active="true">Булки</Tab>
                    <Tab value="sauces">Соусы</Tab>
                    <Tab value="fillings">Начинки</Tab>
                </div>

                {/* Карточки ингредиентов, скомбинированные по типам ингредиентов */}
                <IngredientsList>
                    <Ingredients text="Булки" type="bun" />
                    <Ingredients text="Соусы" type="sauce" />
                    <Ingredients text="Начинки" type="main" />
                </IngredientsList>
            </div>
        );
    }
}

export default BurgerIngredients