import React from 'react';
import constructorStyles from './burger-constructor.module.css';


class BurgerConstructor extends React.Component {
    render() {
        return (
            <div className={constructorStyles.container}>
                BurgerConstructor
            </div>
        );
    }
}

export default BurgerConstructor