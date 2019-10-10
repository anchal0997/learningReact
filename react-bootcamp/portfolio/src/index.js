import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import App from './App'

ReactDOM.render(<App />,document.getElementById('root'));

class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    speak(){
        console.log("I am "+this.name+" and I am "+this.age+" years old");
    }


}


const animal=new Animal("Simbha",13);
animal.speak();

class Lion extends Animal{
    constructor(name,age,furColor,speed){
        super(name,age);
        this.furColor=furColor;
        this.speed=speed;
    }

    roar(){
        console.log("ROAR!!!My name is "+this.name+" and I am "+this.furColor+" in color");
    }
}


const lion1=new Lion("poopla",12,"red",428);
lion1.speak();
lion1.roar();
