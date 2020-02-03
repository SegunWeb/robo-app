import React from 'react';
import {Heading, Image, Content} from 'arwes';


const ItemFriend = ({id, name, email}) => (

    <div className="item-wrapp">
        <Image animate resources={`https://robohash.org/${id}`}>
            <Heading node='h6'>{name}</Heading>
            <Content>
                <blockquote data-layer='success' className="user-mail">{email}</blockquote>
            </Content>
        </Image>
    </div>

);
export default ItemFriend ;