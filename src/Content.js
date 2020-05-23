import React from 'react';

import './App.css';

import Content1 from "./Content1";
import Content2 from "./Content2";
import Content3 from "./Content3";

function Content(props) {
    return (
        <div>
            <p>
                You can see what we’ll be building here: Final Result. If the code doesn’t make sense to you, or if you
                are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand
                React and its syntax.
            </p>
            <p>
                We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the
                features that you’ll notice is that there is a numbered list to the right of the game’s board. This list
                gives you a history of all of the moves that have occurred in the game, and it is updated as the game
                progresses.
            </p>
            <p>
                You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler
                template in this tutorial. Our next step is to set you up so that you can start building the game.
            </p>
            {/*<h1>Content</h1>*/}
            {/*<Content1/>*/}
            {/*<Content2/>*/}
            {/*<Content3/>*/}

            {/*<ul>*/}
            {/*    {[*/}
            {/*        <li key='1'>{props.tasks[0]}</li>,*/}
            {/*        <li key='2'>{props.tasks[1]}</li>,*/}
            {/*        <li key='3'>{props.tasks[2]}</li>,*/}
            {/*        <li key='4'>{props.tasks[3]}</li>,*/}
            {/*        <li key='5'>{props.tasks[4]}</li>*/}
            {/*    ]*/}
            {/*    }*/}
            {/*</ul>*/}
            {/*<ul>*/}
            {/*    {props.tasks.map(el => <li key={el}>{el}</li>)}*/}
            {/*</ul>*/}
        </div>
    );
}

export default Content;
