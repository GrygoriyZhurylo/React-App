import React from 'react';
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";


function Footer(props) {
    const footerMenuItem = ['Finance', 'Laws', 'Taxes', 'Income', 'Deductions', 'Credits', 'Strategy']
    const footerAdd = () => {
        console.log('This is Concepts')
        // props.attempt2('shark - footer')
    };
    const footerAdd1 = () => {
        console.log('This is Strategy')
    }
    const footerAdd2 = () => {
        console.log('This is Credit')
    }
    const footerAdd3 = () => {
        console.log('This is Finder')
    }

    return (
        <div className=' app-footer'>
            <button className={'myButton'} onClick={footerAdd}>Concepts</button>
            <button className={'myButton'} onClick={footerAdd}>Strategy</button>
            <button className={'myButton'} onClick={footerAdd2}>Credit</button>
            <button className={'myButton'} onClick={footerAdd3}>Finder</button>
            <ul>
                {/*{props.footerMenu.map(el=><li key={el}>{el}</li>)}*/}

            </ul>
            {/*<h1>Footer {props.v}</h1>*/}
            {/*<Footer1/>*/}
            {/*<Footer2/>*/}
            {/*<Footer3/>*/}
            {/*<FooterMenue footerMenuItem = {footerMenuItem}/>*/}

            {/*<ul>*/}
            {/*    {*/}
            {/*    [*/}
            {/*    <li key='1'>{props.list[0]}</li>,*/}
            {/*    <li key ='2'>{props.list[1]}</li>,*/}
            {/*    <li key = '3'>{props.list[2]}</li>*/}
            {/*    ]*/}
            {/*    }*/}

            {/*    <hr/>*/}
            {/*</ul>*/}
        </div>
    );
}

export default Footer;
