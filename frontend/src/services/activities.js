import axios from "axios"
const baseUrl = "/api/activities"

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newActivity => {
    const request = axios.post(baseUrl, newActivity)
    return request.then(response => response.data)
}

const deleteAll = () => {
    const request = axios.delete(baseUrl)
}

const deleteById = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}
export default {getAll, create, deleteAll, deleteById}