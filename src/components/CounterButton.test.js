import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('<CounterButton>', () => {
    const mockColor = 'red';
    const ShallowCounterButton = shallow(<CounterButton color = {mockColor} />)

    it('counterButton snapshot', () => {
        expect(ShallowCounterButton).toMatchSnapshot();
    })

    it('correctly increaments the counter', () => {

        ShallowCounterButton.find('#counter').simulate('click');
        ShallowCounterButton.find('#counter').simulate('click');
        ShallowCounterButton.find('#counter').simulate('click');

        console.log(ShallowCounterButton.state()); // {count: 3}

        expect(ShallowCounterButton.state()).toEqual({
            count: 3
        }); 

        ShallowCounterButton.find('#counter').simulate('keypress');

        expect(ShallowCounterButton.state()).toEqual({
            count: 3
        }); 

        expect(ShallowCounterButton.props().color).toEqual('red');
    })
})