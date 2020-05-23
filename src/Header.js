import React from 'react';


function Header(props) {

    const add = () => {
        console.log('This is About')
        // props.attempt('shark')
    };
    const add1 = () => {
        console.log('This is Price')
    }
    const add2 = () => {
        console.log('This is System')
    }
    const add3 = () => {
        console.log('This is Contacts')
    }
    const add4 = () => {
        console.log('This is List')
    }
    // const add = (button) => {
    //     console.log('ADD')
    //     props.attempt()
    // }
    return (
        <div className={'app -header'}>
            {/*<ul>*/}
            {/*    {props.topMenu.map(el => <li key={el}>{el}</li>)}*/}
            {/*</ul>*/}
            <button className={'myButton'} onClick={add}>About</button>
            <button className={'myButton'} onClick={add1}>Price</button>
            <button className={'myButton'} onClick={add2}>System</button>
            <button className={'myButton'} onClick={add3}>Contacts</button>
            <button className={'myButton'} onClick={add4}>List</button>
            {/*{props.arr.map(el => {<button className={'myButton'} onClick={() => add({el})}>{el}</button>})*/}
        </div>
    );
}

export default Header;


{/*<button className={'myButton'}>Add</button>*/
}
{/*This is Header {props.version}*/
}
{/*  <Logo/>*/
}
{/*<TopMenue topMenuItem = {topMenuItem}/>*/
}
{/*  <ul>*/
}
{/*      {props.topMenu.map(el => <li key={el}>{el}</li>)}*/
}
{/*  </ul>*/
}
{/*<ul>*/
}
{/*    {props.menu.map(el => <li key={el}>{el}</li>)}*/
}
{/*    {props.menu.map(el => <MenuItem key = {el} item = {el}/>)}*/
}
{/*</ul>*/
}