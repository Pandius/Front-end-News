import React, { Component } from 'react';
import Loading from '../utils/Loading'

class Articles extends Component {

    state = {
        articles: null,
        isLoading: true
    }
    render() {
        if (Loading) return <Loading text='Loading article...' />
        return (
            <div>
                all articles
            </div>
        );
    }
}

export default Articles;