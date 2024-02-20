import { useEffect, useState } from "react";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";
import Description from "./Description";

export default function App() {
  
  const [values, setValues] = useState (() => {
    const savedValues = window.localStorage.getItem("saved-feedback");
    if (savedValues !== null) {
      return JSON.parse(savedValues);
}
return {
  good: 0,
  neutral: 0,
  bad: 0,
};
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(values)); 
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const onReset = () => {
    setValues(() => ({
      good: 0,
      neutral: 0,
      bad: 0,
    }));    
  } 

  const totalFeedback = values.good + values.neutral + values.bad; 
  const noFeedback = totalFeedback === 0; 
  const totalPositive = Math.round(((values.good + values.neutral) / totalFeedback) * 100);

  return (
    <div>
     <Description/>
      <Options
        no={noFeedback}          
        onResetR={onReset}
        onGood={() => updateFeedback("good")}
        onNeutral={() => updateFeedback("neutral")}
        onBad={() => updateFeedback("bad")}
      />
      {!noFeedback && (
        <Feedback
          goodValues={values.good}
          neutralValues={values.neutral}
          badValues={values.bad}
          totalValues={totalFeedback}
          positiveVal={totalPositive}
        />
      )}
      {noFeedback && <Notification />}
    </div>
  );
}
