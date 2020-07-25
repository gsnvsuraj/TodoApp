import React, { Component } from 'react';
import sun from './img/sun.png';
import moon from './img/moon.png';

class DarkMode extends Component {
    
    darkMode() {
        let ele = document.body;
        ele.classList.toggle('darkMode');
    
        let imgSrc = document.getElementById("imgDark");
        if (imgSrc.src === sun)
          imgSrc.src = moon;
        else
          imgSrc.src = sun;
    }

    render() { 
        return (
            <div className="">
                <img id="imgDark" className="darkImg toggle" src={sun} alt="sun" width="50px" onClick={this.darkMode} />
            </div>
        );
    }
}
 
export default DarkMode;