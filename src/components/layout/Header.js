import React from 'react';
import {Link} from 'react-router-dom';
const header =()=>{

    const style={
        backgroundColor:"#333",
        color:'#fff',
        textAlign:'center',
        padding:'10px'
    }
    const style1={
        color:'#fff',
        textDecoration:'none'
    }
    return (
        <header style={style}>
            <h1>ToDoList</h1>
            <Link style={style1} to="/">Home</Link> | <Link style={style1} to="/about">About</Link>

        </header>
    );
}
export default header;