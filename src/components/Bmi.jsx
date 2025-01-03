import { useState } from "react";

const Bmi = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmiResult, setBmiResult] = useState();
    const [msg, setMsg] = useState()

    const handleCalculate = () =>{
        // Formula for BMI is weight/m2
        // Feet = 0.3084
        let meter = height*0.3084 ;
        let meterSquare = meter*meter;
let bmi = (weight/meterSquare).toFixed(2);
console.log(bmi);
setBmiResult(`Your bmi result is ${bmi} `);

if(bmi<18){
    setMsg("you are underweight")
}
if(bmi >= 18 && bmi<25){
    setMsg("you are normal weight")
}
if(bmi>=25 && bmi<30){
    setMsg("you are overweight")
}
if(bmi>=30){
    setMsg("Obesity")
}
    }

    const resetAll = () => {
        window.location.reload()
    }
    return(
        <div className="container">
            <h2>BMI(Body Mass Index)</h2>
<div className="inputs">
    <p>Enter the Weight(in Kg) </p>
    <input type="number"  value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Enter the weight"/>
    <p>Enter the Height(in cm) </p>
    <input type="number"   value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Enter the height"/>
</div>
<div className="btns">
    <button onClick={handleCalculate}>Calculate</button>
    <button  className="reload-btn" onClick={resetAll}>Reload</button>
</div>
<div className="result">
    <p>{bmiResult}</p>
    <p>{msg}</p>
</div>
        </div>
    )
}
export default Bmi;