import React from 'react';
import ingredientStyles from './burger-ingredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCards from '../ingredient-cards/ingredient-cards';
import PropTypes from 'prop-types';

// -------------------------------------------------------------------------------------
// Ниже идут два вспомогательных компонента, которые не стал выносить в отдельные 
// файлы из-за их незначительности и не подверженности повторному использованию
// впоследствии планирую сделать рефакторинг и избавиться вообще от них.

// Компонент "Весь список ингредиентов"
const IngredientsList = ({ children }) => {
    return (<div className={ingredientStyles.ingredientlist}>
        {children}
    </div>
    )
}

// Компонент, отображающий набор конкретных ингридиентов
const Ingredients = ({ text, type }) => {
    return (
        <div className="mt-10">
            <p className='text text_type_main-medium'>{text}</p>
            {/* Карточки ингредиентов - контейнер, выводящий набор карточек
            в зависимости от типа ингредиентов */}
            <IngredientCards listType={type} />
        </div>
    )
}
Ingredients.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

// -------------------------------------------------------------------------------------
// Основной компонент:
// Часть макета страницы (левая половина), отвечающая за вывод информации об ингредиентах 
const BurgerIngredients = () => {
    return (
        <div className={ingredientStyles.container}>
            {/* Заголовок */}
            <p className="text text_type_main-large mt-10">Соберите бургер</p>

            {/* Закладки (табы) */}
            <div className={`${ingredientStyles.tabs} mt-5`}>
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


export default BurgerIngredients