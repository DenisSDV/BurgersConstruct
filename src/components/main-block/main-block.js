import React from 'react';
import styleMainBlock from './main-block.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';



class MainBlock extends React.Component {
    render() {
        return (
            <div className={styleMainBlock.main_container}>
                <div className={styleMainBlock.info_block}>
                    <BurgerIngredients />
                </div>
                <div className={styleMainBlock.info_block}>
                    <BurgerConstructor />
                </div>
            </div>
        );
    }
}

export default MainBlock