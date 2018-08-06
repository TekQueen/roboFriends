import { shallow, mount, render} from 'enzyme';
import React from 'react';
import Card from './Card';


describe('<Card />', () => {
  const CardComponent = shallow(<Card />);
  

  it('expect to render Card component', () => {
    expect.assertions(1);
    expect(CardComponent.length).toBe(1);
  })

  it('finds the node which matches the selecter', () => {
    expect.assertions(1);
    expect(CardComponent.find('.tc').length).toBe(1);
  })

  it ('returns a new wrapper with only host nodes', () => {
      expect.assertions(1);
      expect(CardComponent.find('.tc').hostNodes().length).toBe(1);
  })

  it('jest snapshot testing', () => {
      expect(CardComponent).toMatchSnapshot();
  })
})


