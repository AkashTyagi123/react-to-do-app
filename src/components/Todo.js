import React from 'react';
const todo = (props) =>{
    const style ={
        backgroundColor:'#f4f4f4',
        padding:'10px',
        borderBottom:'1px #ccc dotted',
        textDecoration:'none'
    }
    if(props.complete === true)
       style.textDecoration='line-through';

    const btnStyle={
        backgroundColor:'#ff0000',
        color:'white',
        border:'none',
        padding:'5px 9px',
        borderRadius:'50%',
        cursor:'pointer',
        float:'right'
    }
    return (
        <div style={style}>
            
            <p>
            <input type='checkbox' onChange={props.markComplete} />
                {props.title}
            <button onClick={props.delItem} style={btnStyle}>x</button>
                </p>
        </div>
        
    );
};
export default todo;