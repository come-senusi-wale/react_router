import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "./data";

export let Person = () => {

    let {id} = useParams();
    let person = data.filter((dat) => dat.id == id)

    //console.log(person[0].name)


    return(
        <h1>{person[0].name}</h1>
    )
}