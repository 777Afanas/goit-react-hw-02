// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState } from "react";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateGood = () => {
    setValues({
      ...values,
      good: values.good + 1,
    });
  };

  const updateNeutral = () => {
    setValues({
      ...values,
      neutral: values.neutral + 1,
    });
  };

  const updateBad = () => {
    setValues({
      ...values,
      bad: values.bad + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const noFeedback = totalFeedback === 0;

  return (
    <div>
      <div>
        <h1>Sip Happens Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>
      </div>
      <Options
        no={noFeedback}
        onGood={updateGood}
        onNeutral={updateNeutral}
        onBad={updateBad}
      />
      {!noFeedback &&
        <Feedback           
          goodValues={values.good}
          neutralValues={values.neutral}
          badValues={values.bad}
        />}
      <Notification/>
    </div>
  );
}

