import React, { Component } from "react";

const PlantComp = () => {
    return (
        <h2>This is a Plant Component!</h2>
    )
}

class Plant extends Component {
    render () {
        return (
            <PlantComp/>
        )
    }
}

export default Plant;