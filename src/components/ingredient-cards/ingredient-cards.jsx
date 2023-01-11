import React from 'react';
import ingredientStyles from './ingredient-cards.module.css';
import data from '../../utils/data'
import IngredientCard from '../ingredient-card/ingredient-card';
import PropTypes from 'prop-types';


/* Карточки ингредиентов - контейнер, выводящий набор карточек
            в зависимости от типа ингредиентов */
const IngredientCards = ({ listType }) => {
    return (<div className={`${ingredientStyles.cards} ml-4 mr-2`}>
        {
            data.map((ingredient) => (
                (ingredient.type === listType) ?
                    <IngredientCard
                        key={ingredient._id}
                        name={ingredient.name}
                        price={ingredient.price}
                        image={ingredient.image_large} /> : null
            )
            )
        }

    </div>)
}

IngredientCards.propTypes = {
    listType: PropTypes.string.isRequired
};

export default IngredientCards