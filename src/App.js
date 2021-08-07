import { useState } from "react";
import "./styles.css";

var emojiData = {
  "😀": "grinning",
  "🤣": "rofl-rolloing on the floor laughing",
  "😅": "sweat smile",
  "😊": "blushed",
  "😍": "heart eyes",
  "🤩": "start struck",
  "🙄": "rolling eyes",
  "😥": "cry",
  "😣": "persevere",
  "😋": "yum",
  "🤔": "thinking",
  "😏": "smirk",
  "😫": "tired face",
  "😎": "swag",
  "🤗": "hugging"
};

var emojiList = Object.keys(emojiData);
export default function App() {
  const [meaning, setMeaning] = useState();
  const inputEmojiHandler = (e) => {
    var val = e.target.value;

    var meaning = emojiData[val];
    if (meaning === undefined) {
      console.log("Sorry we do not have this emoji in our database");
    }
    setMeaning(meaning);
  };
  const clickedEmojiHandler = (item) => {
    console.log("clicked", item);
    var meaning = emojiData[item];
    setMeaning(meaning);
  };
  return (
    <div className="App">
      <h1>Know About Face Emojis</h1>
      <input
        placeholder="Enter the Emoji here"
        onChange={inputEmojiHandler}
      ></input>
      <br />
      <h3>{meaning}</h3>
      <br />
      <p>or try clicking on these emojis</p>
      {emojiList.map((item) => {
        return (
          <span
            style={{ fontSize: "2rem", cursor: "pointer" }}
            onClick={() => {
              clickedEmojiHandler(item);
            }}
          >
            {item}
          </span>
        );
      })}
      {/* {fetch('https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis.pretty.json')
      .then(response => response.json())
      .then((json) => 
        json.map((i)=>
        {
          return(
           console.log(i)
               )
        }))} */}
    </div>
  );
}
