import React, {Component} from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SeachBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';

import {setSearchField, setRequestRobots} from '../actions';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
    searchField: state.RobotsSearch.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
})
        
        

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(setRequestRobots())
})
        

class App extends Component{

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

export default connect(mapStateToProps, mapDispatchToProps)(App);