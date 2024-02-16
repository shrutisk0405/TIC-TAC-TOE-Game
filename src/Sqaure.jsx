import React from 'react'

const Sqaure = (props) => {
  return (
    <div
    onClick={props.onClick}
    style={{
    border:"2px solid",
    borderRadius:'20px',
    height:'100px',
    width:"100%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    // backgroundColor:"black",
    backgroundColor: props.value === 'X' ? 'aqua' : props.value === 'O' ? 'lightgreen' : 'aliceblue',
    color:'black',
    
    
    }}
    className='square'>
        <h5>{props.value}</h5>

    </div>
  );
};

export default Sqaure;