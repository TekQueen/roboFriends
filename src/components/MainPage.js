import React, { Component } from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import SeachBox from './SearchBox';
import ErrorBoundry from './ErrorBoundry';
import CounterButton from './CounterButton';

class MainPage extends Component {
    render() {
        const {searchField, onSearchChange, robots, isPending} = this.props;

        const filteredRobots = robots.filter(
            robot =>  
                robot.name.toLowerCase().includes(searchField.toLowerCase())
        );
        
        return (isPending) ?
                <h1>Loading</h1>
            : (
                <div className = 'tc'>
                    <h1>Robo Friends</h1>
                    <CounterButton />
                    <SeachBox searchChange = {onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
    }

    componentDidMount() {
        this.props.onRequestRobots();
    }
}

export default MainPage;