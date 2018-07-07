import React from 'react';
import Card from './Card';


const CardList = ({robots}) =>  {
    // if (true) {throw new Error('not accepted')}
    return (
        <div>
        {
            robots.map(
                (element, index) =>
                    <Card
                        key = {robots[index].id} 
                        id = {robots[index].id} 
                        name = {robots[index].name}
                        username = {robots[index].username}
                        email = {robots[index].email}
                    /> 
            )    
        }
        </div>
    )
}

export default CardList;