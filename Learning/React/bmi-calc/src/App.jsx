import { useState } from "react";
import "./App.css";

function App() {
  //making state for our app
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const[message, setMessage] = useState('');
  
  //LOgic for calculating BMI
  //LOgic for calculating BMI
  const calculateBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height ===0){
      alert("Please provide valid weight and height.")
    };
    const heightInMeters = height / 100; // Convert height from cm to meters
    const calculatedBmi = weight / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi.toFixed(2)); 
    // Set message based on BMI value
   if (calculatedBmi < 18.5){
    setMessage('Underweight')
   }else if (calculatedBmi >=18.5 && calculatedBmi < 24.9){
    setMessage('Normal weight')
   }else if (calculatedBmi >= 25 && calculateBmi < 29.9){
    setMessage('Overweight')
   }else{
    setMessage('Obesity')
   }

  }
  return (
    <>
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calculateBmi}>
          <div>
            <label>Weight (kg):</label>
            <input
              type="text"
              placeholder="Enter Weight Value"
              value={weight}
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
          </div>
          <div>
            <label>Height(cm)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(event) => {
                setHeight(event.target.value);
              }}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="button" onClick={() => {
              setWeight(0);
              setHeight(0);
              setBmi('');
              setMessage('');
            }}>
              Reload
            </button>
          </div>
          <div className="result">
            <h3>BMI Result is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
}
export default App;
