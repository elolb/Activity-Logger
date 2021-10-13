import axios from "axios"
const baseUrl = "/api/logs"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const getCurrentTime = (id) => {
    const request = axios.get(`${baseUrl}/now`)
    return request.then(response => response.data)
}

const create = newLog => {
    const request = axios.post(baseUrl, newLog)
    return request.then(response => response.data)
}

const update = (id, newLog) => {
    const request = axios.put(`${baseUrl}/${id}`, newLog)
    return request.then(response => response.data)  
}

const deleteAll = () => {
    const request = axios.delete(baseUrl)
}
export default {getAll, getCurrentTime, create, update, deleteAll}