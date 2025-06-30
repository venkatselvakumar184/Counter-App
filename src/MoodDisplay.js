function MoodDisplay({ mood }) {
  const moods = {
    happy: "Keep Smiling! 😄",
    sad: "It's okay to be sad sometimes 😔",
    excited: "Let's Start Celebrate 🤩",
    angry: "Take a Deep Breath 😡",
  };

  return (
    <div className="box">
      {mood ? <p>{moods[mood]}</p> : <p>Click on a button</p>}
    </div>
  );
}

export default MoodDisplay;
