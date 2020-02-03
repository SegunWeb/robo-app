import React from 'react';
import {Project, Words} from 'arwes';
import ItemFriend from "./ItemFriend";


const ListFriend = ({robots}) => (

    <div className="list-wrapp">
        <Project
            animate
            header='PROJECT, TEST APLICATION'
        >
            {anim => (
                <p><Words animate show={anim.entered}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Words></p>
            )}
        </Project>

        <div className="list-friend-wrapp">
            {
                robots.map((user, i) => {
                    return (
                        <ItemFriend
                            key={i}
                            {...user}
                        />
                    )
                })
            }
        </div>

    </div>

);
export default ListFriend ;