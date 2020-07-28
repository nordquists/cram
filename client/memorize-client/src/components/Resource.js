import React, { Component } from "react";

const example_rows = [
    {
        subtitle: "Most Popular Decks",
        decks: [
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
    },
    {
        subtitle: "Recommended Decks",
        decks: [
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
    name: "US Geography",
    topic: "Geopgraphy",
    description: "This is a deck that will help you learn about US geography, including the names of states, their capital cities, and their most notable landmarks.",
    deck: SAMPLE_DECK,
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

        if(this.props.path == "deck/id") {
            console.log("deck")
            setTimeout(function () {
                this.setState({
                    payload: EXAMPLE_DECK,
                    loading: false,
                    error: false
                })
            }.bind(this), 2000);
        }  else if(this.props.path == "/") {
            console.log("/")
            this.setState({
                payload: EXAMPLE_DECK1,
                loading: false,
                error: false
            })
        }
    }

    render () {
        return this.props.render(this.state)
    }
}

export default Resource;