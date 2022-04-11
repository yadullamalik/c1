import { useState } from "react";
import "./App.css";

function App() {
  const [score, setScore] = useState(76);
  const [wicket, setWicket] = useState(2);
  const [ball, setBall] = useState(50);

  const handleScore = (e) => {
    setScore(score + e);
  };

  const handleWicket = (e) => {
    setWicket(wicket + e);
  };

  const handleBall = (e) => {
    setBall(ball + e);
  };

  return (
    <div className="App">
      <h3 className="India">India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              score
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              wicket
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              ball
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            handleScore(score > 100 ? 0 : 1);
          }}
        >
          Add 1
        </button>
        <button
          onClick={() => {
            handleScore(score > 100 ? 0 : 4);
          }}
          className="addScore4"
        >
          Add 4
        </button>
        <button
          onClick={() => {
            handleScore(score > 100 ? 0 : 6);
          }}
          className="addScore6"
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            handleWicket(score > 100 || wicket >= 12 ? 0 : 1);
          }}
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            handleBall(score > 100 ? 0 : 1);
          }}
        >
          Add 1
        </button>
      </div>
      <h1 className="status">{score > 100 ? "India Won" : null}</h1>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
