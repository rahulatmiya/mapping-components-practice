import React from "react";
import DataEntry from "./DataEntry";
import emojipedia from "../emojipedia"

console.log(emojipedia);

function Create(emojiterm){
  return (
    <DataEntry
    key={emojiterm.id}
    emoji={emojiterm.emoji}
    name={emojiterm.name}
    description={emojiterm.meaning}
    />
  )
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
     
      <dl className="dictionary">
      {emojipedia.map(Create)}
      </dl>
    </div>
  );
}

export default App;
