import React, { Component } from 'react';
import * as api from '../api'
import Loading from '../utils/Loading'
import ErrorPage from '../utils/ErrorPage'
import dateFormat from '../utils/DateFormat'
import Voter from './Voter'
import ArticleComments from './ArticleComments'

class Article extends Component {

    state = {
        article: null,
        isLoading: true,
        error: null
    }

    componentDidMount() {
        this.fetchArticleById()
    }

    fetchArticleById = () => {
        const { article_id } = this.props
        api.getArticleById(article_id).then(article => {
            this.setState({ article: article, isLoading: false })
        }).catch(error => {
            this.setState({ error, isLoading: false })
        })
    }

    render() {
        const { article, isLoading, error } = this.state
        const { loggedInAs, article_id } = this.props

        if (error) return <ErrorPage err={error} />
        if (isLoading) return <Loading text='Loading article...' />
        return (
            <div>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
                <h4>Author:{article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                <h4>Comments: {article.comment_count}</h4>
                <h4>Submitted on: {dateFormat(article.created_at)}</h4>
                <Voter votes={article.votes} id={article.article_id} type='articles' />
                <ArticleComments article_id={article_id} username={loggedInAs} />
            </div>
        );
    }
}

export default Article;