import React from 'react'

function card(props: any) {
  return (
    <>
    <div className='card-container'>
    <div className='icon'>
      <img src={props.icon}  alt="" />
    </div>
    <div className="icon icon2"></div>
    <div className='card-content'>
      <h1>{props.title}</h1>
      <p className='card-text'>{props.text}</p>
    <div className="card-elipse"></div>
    </div>
    </div>
    </>
  )
}

export default card
