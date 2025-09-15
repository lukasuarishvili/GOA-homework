import React from 'react'
import { useState } from 'react'

function Mood() {

    let [mood, setmood] = useState("");

    const Mood = {
        "happy": "😀",
        "sad ": "🙁",
        "scared ": "😰",
        "angry": " 😡",
        "Unknown": "🤷‍♂️"
    };

    function displayMood(event) {
        event.preventDefault();
        let key=event.target.mood.value.trim()

        setmood(mood.key)
    };

    return (

        <div>
            <form onSubmit={displayMood}>
                <input type="text" placeholder="enter you're name" name='mood' />
                <button type="submit">submit</button>
            </form>

            <h4>{mood}</h4>
        </div>
    )
};

export default Mood