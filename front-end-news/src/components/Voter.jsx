import React, { Component } from 'react';
import styles from './Voter.module.css'
import { addVote } from '../api'



class Voter extends Component {
    state = {
        changeVotes: 0
    }

    render() {
        return (
            <div>
                <button className={this.state.changeVotes >= 1 ? styles.disable_up : styles.enable_up}
                    onClick={() => this.voteAdder(1)}
                    disabled={this.state.changeVotes === 1}><span role="img" aria-label="thumbsUp">👍</span></button>

                <p> Votes: {this.props.votes + this.state.changeVotes}</p>

                <button className={this.state.voteMod === -1 ? styles.disable_down : styles.enable_down}
                    onClick={() => this.voteAdder(-1)}
                    disabled={this.state.changeVotes === -1} ><span role="img" aria-label="thumbsDown">👎</span></button>


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