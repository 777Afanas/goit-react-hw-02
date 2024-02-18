export default function Options({ no, onGood, onNeutral, onBad }) {
  return (
    <div>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
      <button disabled={no}>Reset</button>
    </div>
  );
}
