export default function Options({ no, onResetR, onGood, onNeutral, onBad }) {
  return (
    <div>
      <button onClick={onGood}>Good</button>
      <button onClick={onNeutral}>Neutral</button>
      <button onClick={onBad}>Bad</button>
      {!no && <button onClick={onResetR}>Reset</button>}
    </div>
  );
}
