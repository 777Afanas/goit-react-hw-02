export default function Feedback({ goodValues, neutralValues, badValues }) {
  return (
    <div>
      <p>Good:{goodValues}</p>
      <p>Neutral:{neutralValues}</p>
      <p>Bad:{badValues}</p>
    </div>
  );
}
