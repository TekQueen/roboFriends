import React, {Component} from 'react';

import MainPage from '../components/MainPage';

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
        
// We don't even need to test this :)
class App extends Component{

    render() {
        return (
            <MainPage 
                {...this.props}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);