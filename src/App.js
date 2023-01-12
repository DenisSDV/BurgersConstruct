import React from 'react';
import AppHeader from './components/app-header/app-header';
import MainBlock from './components/main-block/main-block';


class App extends React.Component {
    render() {
        return (
            <>
                <AppHeader />
                <MainBlock />
            </>
        );
    }
}

export default App;