import React from 'react';

import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";


function App() {
    const topMenu = ['About', 'Price', 'System', 'Contacts', 'List']
    const footerMenu = ['Concepts', 'Structure', 'Images', 'Tables', 'Forms', 'Carousels']
    const fisher = () => {
        console.log('Pull')
    }
    const fisher2 = () => {
        console.log('Pull2')
    }

    // const fisher = () => {
    //     console.log('Pull')
    // }
    return (
        <div>
            <h1>Intro in React</h1>
            <Header topMenu={topMenu} attempt={fisher}/>
            <Content/>
            <Footer footerMenu={footerMenu} attempt2={fisher2}/>
            {/*<Header arr={arr} attempt={fisher}/>*/}
        </div>
    );
}

export default App;


{/*<Header version={appVersion} topMenu={topMenu}/>*/
}
{/*<h1>Header</h1>*/
}

{/*<p>tekst f or m (definite singular teksta or teksten, indefinite plural tekster, definite plural*/
}
{/*    tekstene)</p>*/
}
{/*<Content/>*/
}
{/*<p>This entry needs quotations to illustrate usage. If you come across any interesting, durably archived*/
}
{/*    quotes then please add them!</p>*/
}
{/*<Footer v={appVersion} footerMenue={footerMenu}/>*/
}


// const appVersion = '0.2.321';
//
//
// const list = ['Contact', 'List', 'Phones']