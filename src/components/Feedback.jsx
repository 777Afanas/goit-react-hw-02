export default function Feedback({
  goodValues,
  neutralValues,
  badValues,
  totalValues,
  positiveVal}) {
  return (
    <div>
      <p>Good:{goodValues}</p>
      <p>Neutral:{neutralValues}</p>
      <p>Bad:{badValues}</p>
      <p>Total:{totalValues }</p>
      <p>Positive:{positiveVal}%</p>
    </div>
  );
}
