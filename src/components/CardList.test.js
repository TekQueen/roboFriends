import { shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';
import { userInfo } from 'os';

describe('<CardList />', () => {
  const mockRobots = [
      {
          id: 1,
          name: 'mahta',
          username: 'mahta',
          email: 'mahta@gmail.com'
      },
      {
        id: 2,
        name: 'mehrad',
        username: 'mehrad',
        email: 'mehrad@gmail.com'
      },
      {
        id: 3,
        name: 'zohreh',
        username: 'zohreh',
        email: 'zohreh@gmail.com' 
      }
  ];

  const CardListComponent = shallow(<CardList robots = {mockRobots} />);
  
  it('a', () => {
    expect(CardListComponent).toMatchSnapshot();
  })
})
