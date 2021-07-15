import React, { useEffect, useState } from "react";
import axios from "axios";

const Planets = (props) => {
    const [planets, setPlanets] = useState(null);

    useEffect(() => {
            axios
                .get("https://swapi.dev/api/planets/" + props.id)
                .then(response => {
                    setPlanets(response.data);
                    console.log(response)
                })
                .catch((err) => {
                    console.log(err);
                });
        }, [props.id]);

        if (planets === null) {
            return <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/16823f41070057.5797d9ef4eed4.gif" alt="loading" />
        }

    return (
        <div>
            <h1>{planets.name}</h1>
            <h4>Climate: {planets.climate}</h4>
            <h4>Terrain: {planets.terrain}</h4>
            <h4>Population: {planets.population}</h4>
            <h4>Diameter: {planets.diameter}</h4>
        </div>)
}

export default Planets;