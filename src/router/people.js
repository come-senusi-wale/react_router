
import React from "react";

import { data } from "./data";
import { Link } from "react-router-dom";

export let People = () => {

    return(
        <>
        {data.map((person) => {
            return (
                <div key={person.id}>
                    <span>{person.name}</span>
                    <Link to={`person/${person.id}`}>kwon more</Link>
                </div>
            )
        })}
        </>
    )
}