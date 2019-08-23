import axios from 'axios'

const BASE_URL = 'https://ncnewsbedos.herokuapp.com/api'

export const getArticles = async (topic, sort_by, order, p) => {
    const { data } = await axios.get(`${BASE_URL}/articles`, {
        params: {
            topic,
            sort_by,
            order, p
        }
    })
    return data
}
