import React, { useEffect, useState } from "react";
import axios from "axios";

const People = (props) => {
    const [people, setPeople] = useState(null);

    useEffect(() => {
            axios
                .get("https://swapi.dev/api/people/" + props.id)
                .then(response => {
                    setPeople(response.data);
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err);
                });
        }, [props.id]);

        if (people === null) {
            return <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/16823f41070057.5797d9ef4eed4.gif" alt="loading" />;
        }

    return (
        <div>
            <h1>{people.name}</h1>
            <h4>Height: {people.height}</h4>
            <h4>Mass: {people.mass}</h4>
            <h4>Hair Color: {people.hair_color}</h4>
            <h4>Gender: {people.gender}</h4>
            <a href="/planets/1">homeworld</a>
        </div>)
}

export default People;