import React, { Component } from 'react';
import Loading from '../utils/Loading'
import * as api from '../api'
import ArticleCard from './ArticleCard'
import Sorter from './Sorter'
import ErrorPage from '../utils/ErrorPage'
import PageChanger from './PageChanger'

class Articles extends Component {

    state = {
        articles: null,
        sort_by: null,
        order: null,
        comment_count: null,
        articlesCount: null,
        isLoading: true,
        error: null,
        p: 1
    }
    render() {

        const { isLoading, articles, error, p, articlesCount } = this.state
        if (isLoading) return <Loading text='Loading articles...' />
        if (error) return <ErrorPage err={error} />
        const finalPage = articlesCount < 10
        return (
            <div className="articleList">
                <h2>All Articles:</h2>
                <Sorter setSortOrder={this.setSortOrder} />

                <ul>
                    {articles.map(article => { return <ArticleCard articles={article} key={article.article_id} /> })}
                </ul>
                <PageChanger p={p} finalPage={finalPage} setPage={this.setPage} />

            </div>
        );
    }

    setPage = p => {
        this.setState({ p: p })
    }

    componentDidMount() {
        this.fetchArticles()
    }

    fetchArticles = () => {
        const { topic } = this.props
        const { sort_by, order, p } = this.state
        api.getArticles({ topic, sort_by, order, p }).then(({ articles }) => {
            this.setState({
                articles: articles,
                articlesCount: articles.length,
                isLoading: false,
                error: null,
                p: p
            })
        }).catch((error) => {
            this.setState({ error, isLoading: false })
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.topic !== this.props.topic ||
            prevState.sort_by !== this.state.sort_by ||
            prevState.order !== this.state.order ||
            prevState.p !== this.state.p) {
            this.fetchArticles()
        }
    }
    setSortOrder = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }


}

export default Articles;