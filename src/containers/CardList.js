import React from 'react';
import Card from './Card'


const CardList = ({robots}) => {

    return (
        <div>
            {
                robots.map((user, i) =>{
                    const {name, id, email, username} = robots[i];

                    return (
                        <Card
                            key={user+id}
                            name={name}
                            username={username}
                            email={email}
                            id={id}
                        />
                    )
                })
            }
        </div>
    )

};

export default CardList;