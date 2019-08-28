import React, { Component } from 'react';
import * as api from '../api'
import Loading from '../utils/Loading'
import ErrorPage from '../utils/ErrorPage'
import CommentAdder from './CommentAdder'


class ArticleComments extends Component {

    state = {
        comments: [],
        isLoading: true,
        error: null
    }


    componentDidMount() {
        this.getComments()
    }

    getComments = () => {
        const { article_id } = this.props
        api.getArticleComments(article_id).then(comments => {
            this.setState({ comments: comments, isLoading: false })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.comments.comments_id !== this.state.comments.comments_id) {
            this.getComments()
        }
    }

    addComment = commentToAdd => {
        this.setState(({ comments }) => {
            return { comments: [commentToAdd, ...comments] }
        })
    }

    handleDelete = (comment_id) => {
        api.deleteCommentById(comment_id)
        this.setState({ comments: this.state.comments.filter(comment => comment.comment_id !== comment_id) })
    };

    render() {
        const { comments, isLoading, err } = this.state
        const { article_id, username } = this.props
        if (err) return <ErrorPage err={err} />
        if (isLoading) return <Loading text='Loading comments...' />
        return (
            <div>
                <CommentAdder addComment={this.addComment} article_id={article_id} username={username} />
                <h3>Submitted Comments:</h3>


                {/* <ul>
                    {comments.map(comment => {
                        return (
                            // <CommentCard key={comment.comment_id} comments={comment} handleDelete={this.handleDelete} username={username} />
                        )
                    })}
                </ul> */}

            </div>
        );
    }
}


export default ArticleComments;