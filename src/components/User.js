import { useState } from "react";

const User = ({ name, location }) => {
    const [Count, Setcount] = useState(1);
    return (
        <div className="about_creator">
            <h1>
                name :{name}
            </h1>
            <h2> react developer</h2>
            <h3>{location}</h3>
            <h2>count : {Count}</h2>
            <button onClick={() => { Setcount(Count + 1) }}>increase</button>
            <h2>count : {Count}</h2>
        </div>

    )
}

export default User;