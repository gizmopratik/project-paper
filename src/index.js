import _ from 'lodash';
import './style.css';
import turtle from './Random-turtle.gif';

function component() {
    var element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = turtle
    element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());
