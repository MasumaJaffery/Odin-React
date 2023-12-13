import React from 'react';

const currentDate = new Date();
let time = currentDate.getHours();
let greeting = "";
if(time >= 0 && time <= 12) {
  greeting = "Buenas Dais";
} else if(time >= 12 && time <= 24) {
  greeting = "Buenos Noches";
} else {
  greeting = "Salam";
}

const Greeting = () => {
  return (
    <>
    <h1 className="text-blue-500">Hello, {greeting}</h1>
    </>
  );
};

export default Greeting;

/*** Tada! Feliz Codificacion */