import React, { useId } from 'react';

function UseId(props) {
    const id = useId();
    return (
        <div>
            <label htmlFor={id + "username"}>username</label>
            <input type="text" id={id + "username"} />
            <label htmlFor={id + "password"}>Password</label>
            <input type="password" id={id + "password"} />
            <input type="submit" value="Submit" />
        </div>
    );
}

export default UseId;