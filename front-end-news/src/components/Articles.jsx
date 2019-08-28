import React, { Component } from 'react';
import Loading from '../utils/Loading'
import * as api from '../api'
import ArticleCard from './ArticleCard'
import Sorter from './Sorter'
import ErrorPage from '../utils/ErrorPage'

class Articles extends Component {

    state = {
        articles: null,
        sort_by: null,
        order: null,
        comment_count: null,
        articlesCount: null,
        isLoading: true,
        error: null
    }
    render() {

        const { isLoading, articles, error } = this.state
        if (isLoading) return <Loading text='Loading articles...' />
        if (error) return <ErrorPage err={error} />

        return (
            <div className="articleList">
                <Sorter setSortOrder={this.setSortOrder} />
                <ul>
                    {articles.map(article => { return <ArticleCard articles={article} key={article.article_id} /> })}
                </ul>

            </div>
        );
    }

    componentDidMount() {
        this.fetchArticles()
    }

    fetchArticles = () => {
        const { topic } = this.props
        const { sort_by, order } = this.state
        api.getArticles({ topic, sort_by, order }).then(({ articles, total_count }) => {
            this.setState({
                articles: articles,
                articlesCount: total_count,
                isLoading: false,
                error: null
            })
        }).catch((error) => {
            this.setState({ error, isLoading: false })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic ||
            prevState.sort_by !== this.state.sort_by ||
            prevState.order !== this.state.order) {
            this.fetchArticles()
        }
    }
    setSortOrder = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
}

export default Articles;