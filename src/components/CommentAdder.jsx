
import React from 'react';
import * as api from '../api'


class CommentAdder extends React.Component {
    state = {
        body: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { body } = this.state
        const { article_id, username } = this.props
        api.postComment(article_id, { body, username })
            .then((newComment) => {
                this.props.addComment(newComment)
            })
            .then(this.setState({
                body: ''
            }))
    }

    render() {
        const { body } = this.state
        return (
            <>
                <h1 className="commentFormHeader">Add a Comment:</h1>
                <form onSubmit={this.handleSubmit} >
                    <textarea type="text" name='body' id='body' placeholder='Share your thoughts...' value={body} onChange={this.handleChange} required></textarea>
                    <br />
                    <button className="submitbtn">Submit your thoughts</button>
                </form>
            </>

        )
    }
}

export default CommentAdder