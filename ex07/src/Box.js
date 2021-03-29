import React, { Component } from "react";

const SimpleBox = () => {
    return (
        <h2>Thsi is a Box Component!</h2>
    )
}
class Box extends Component {
    render() {
        return (
            <SimpleBox />
        )
    }
}
export default Box;