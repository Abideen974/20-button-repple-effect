import React from 'react'
import './button.css'
import {useRef} from 'react';

function Buttonanimation() {
  const btn = document.getElementById("btn")
  function handleChange (e) {
    const x = e.clientX;
    const y = e.clientY;
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = x -buttonLeft;
    const yInside = y - buttonTop;
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    // console.log("first")
   btn && btn.appendChild(circle);
    setTimeout(()=>circle.remove(),200);
   }



  return (
    <>
        <button id="btn" onClick={handleChange}>Click me </button>

</>
  );
}

export default Buttonanimation