import React, { useState } from "react";
import axios from "axios";

function App() {
  const [carValue, setCarValue] = useState("");
  const [riskRating, setRiskRating] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/calculatePremiums",
        {
          car_value: parseFloat(carValue),
          risk_rating: parseInt(riskRating, 10),
        }
      );
      setResult(
        `Yearly Premium: ${response.data.yearly_premium}, Monthly Premium: ${response.data.monthly_premium}`
      );
    } catch (error) {
      setResult("Error calculating premium");
    }
  };

  return (
    <div>
      <h1>API 3: Premium Calculation</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Car Value:
          <input
            type="number"
            value={carValue}
            onChange={(e) => setCarValue(e.target.value)}
          />
        </label>
        <br />
        <label>
          Risk Rating:
          <input
            type="number"
            value={riskRating}
            onChange={(e) => setRiskRating(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      <p>Result: {result}</p>
    </div>
  );
}

export default App;
