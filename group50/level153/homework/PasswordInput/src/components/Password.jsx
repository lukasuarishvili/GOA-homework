import React, { useState } from 'react'

function Password() {

    let [password, setpassword] = useState("");
    let [showpassword, setshowpassword] = useState(true);

    function changepassword(event) {
        event.preventDefault();

        setpassword(event.target.password.value);
        event.target.password.value = "";
        if (showpassword) {
            setshowpassword(false)
        } else {
            setshowpassword(true)
        }
    };

    return (
        <div> 
            {/* fix the NAN eroro */}
            <h1>password:{showpassword ? password : "*" * password.length }  </h1>
            <form onSubmit={changepassword}>
                <input type="text" name='password' />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Password