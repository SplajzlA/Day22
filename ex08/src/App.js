import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
    render () {
        const character = [
        {   firstNAme: "Lary",
            lastName: "Page",
        },
        {
            firstNAme: "Ada",
            lastName: "Lovelace",
        },
        {
            firstNAme: "Alan",
            lastName: "Turing",
        }
        ]

        return (
            <div className="container">
                <Table />
            </div>
        )
    }
}



export default App;