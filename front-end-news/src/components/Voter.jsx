import React, { Component } from 'react';
import { addVote } from '../api'
import { Button } from 'react-bootstrap'



class Voter extends Component {
    state = {
        changeVotes: 0
    }

    render() {
        const { changeVotes } = this.state
        return (
            <div className="voting">
                <Button
                    className="votingUpButton"
                    variant="success"
                    onClick={() => this.voteAdder(1)}
                    disabled={changeVotes === 1}
                >
                    Like it!
            </Button>
                <p> Votes: <br /> {this.props.votes + changeVotes}</p>
                <Button
                    className="votingDownButton"
                    variant="danger"
                    onClick={() => this.voteAdder(-1)}
                    disabled={changeVotes === -1}
                >
                    Dislike it.
            </Button>
            </div>
        );
    }

    voteAdder = inc_votes => {
        addVote(this.props.type, this.props.id, inc_votes)
            .then(article => { })
            .catch(err => {
                this.setState(({ changeVotes }) => ({
                    changeVotes: changeVotes - inc_votes
                }))
            })
        this.setState(({ changeVotes }) => ({
            changeVotes: changeVotes + inc_votes
        }))
    }
}

export default Voter;