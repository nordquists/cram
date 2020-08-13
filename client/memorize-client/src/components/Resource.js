import React, { Component } from "react";
import axios from 'axios';

const example_rows = [
    {
        title: "Most Popular Decks",
        elements: [
            {
                id: "1",
                name: "My first deck with a long title"
            },
            {
                id: "2",
                name: "My second deck"
            },
            {
                id: "3",
                name: "My third deck"
            },
            {
                id: "4",
                name: "My fourth deck"
            },{
                id: "1",
                name: "My first deck with a long title"
            },
            {
                id: "2",
                name: "My second deck"
            },
            {
                id: "3",
                name: "My third deck"
            },
            {
                id: "4",
                name: "My fourth deck"
            }
        ]
    },
    {
        title: "Recommended Decks",
        elements: [
            {
                id: "1",
                name: "My first deck"
            },
            {
                id: "2",
                name: "My second deck"
            },
            {
                id: "3",
                name: "My third deck"
            },
            {
                id: "4",
                name: "My fourth deck"
            }
        ]
    }
]

const SAMPLE_DECK = [
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    },
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    },
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    },
    {
        id: 1,
        front: 'front',
        back: 'back'
    },
    {
        id: 2,
        front: 'front2',
        back: 'back2'
    },
    {
        id: 3,
        front: 'front3',
        back: 'back3'
    },
    {
        id: 4,
        front: 'front4',
        back: 'back4'
    },
    {
        id: 5,
        front: 'front5',
        back: 'back5'
    }
]

const EXAMPLE_DECK = [{
    id: "thisismyid",
    name: "US Geography",
    author: "Sean Nordquist",
    categories: [
        {
            id: 1,
            emoji: '🌎',
            label: 'Geography',
        },
        {
            id: 2,
            emoji: '🇺🇸',
            label: 'United States',
        },
    ],
    description: "This is a deck that will help you learn about US geography, including the names of states, their capital cities, and their most notable landmarks.",
    deck: SAMPLE_DECK,
    percentages: {
        red: 10,
        orange: 20,
        green: 30,
    }
}]

const EXAMPLE_DECK1 = [{
    rows: example_rows,
}]

class Resource extends Component {
    state = {
        loading: true,
        error: {},
        payload: []
    }

    componentDidMount() {
        this.setState({loading: true});
        // axios.get(this.props.path).then(res => {
        //     this.setState({
        //         payload: res.data,
        //         loading: false
        //     })
        // })

        axios({
            method: 'get',
            url: this.props.path,
        }).then((res) => {
            this.setState({
                payload: res.data,
                loading: false
            })
        }).catch(error => {
            this.setState({
                payload: [],
                error: error,
                loading: false
            })
        })

        // if(this.props.path === "deck/id") {
        //     console.log("deck")
        //     setTimeout(function () {
        //         this.setState({
        //             payload: EXAMPLE_DECK,
        //             loading: false,
        //             error: false
        //         })
        //     }.bind(this), 0);
        // }  else if(this.props.path === "/") {
        //     console.log("/")
        //     this.setState({
        //         payload: EXAMPLE_DECK1,
        //         loading: false,
        //         error: false
        //     })
        // }
    }

    render () {
        return this.props.render(this.state)
    }
}

export default Resource;