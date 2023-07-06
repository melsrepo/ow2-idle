import './App.css';
import React, {useState, useEffect} from 'react';

function ImgBtn({customImg, btnTxt}) {
    /*const [bgColor, setBgColor] = useState("white"); */
    const [active, setActive] = useState(false)
   
    const handleClick = () => {
        setActive(!active);
      };
    
    return (
     <div>
      <button className = "click"
        onClick = {handleClick} 
        style = {{
            backgroundColor: active ? "orange" : "",
            backgroundImage : "url(" + customImg + ')'
            }}  
        >
            {btnTxt}</button>
     </div>   
      );
  }



  export default ImgBtn;