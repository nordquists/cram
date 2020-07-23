import React, { Component } from "react";

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
            setTimeout(function () {
                this.setState({
                    payload: EXAMPLE_DECK,
                    loading: false,
                    error: false
                })
            }.bind(this), 2000);
        } else {
            this.setState({
                payload: [],
                loading: false,
                error: true
            })
        }
    }

    render () {
        return this.props.render(this.state)
    }
}

export default Resource;