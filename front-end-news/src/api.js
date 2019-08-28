import axios from 'axios'

const BASE_URL = 'https://ncnewsbedos.herokuapp.com/api'

export const getArticles = async ({ topic, sort_by, order, p }) => {
    const { data } = await axios.get(`${BASE_URL}/articles`, {
        params: {
            topic,
            sort_by,
            order, p
        }
    })
    return data
}


export const addVote = async (type, id, inc_votes) => {
    const { data } = await axios.patch(`${BASE_URL}/${type}/${id}`, { inc_votes: inc_votes })
    return data
}

export const getArticleById = async article_id => {
    const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`)
    return data.article
}

export const postComment = async (article_id, newComment) => {
    const { data } = await axios.post(`${BASE_URL}/articles/${article_id}/comments`, newComment)
    return data.comment
}

export const deleteCommentById = async comment_id => {
    return axios.delete(`${BASE_URL}/comments/${comment_id}`)
}

export const getArticleComments = async article_id => {
    const { data } = await axios.get(`${BASE_URL}/articles/${article_id}/comments`)
    return data.comments
}