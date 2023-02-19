// API
import api from './api'

const fetchPosts = async () => {
  try {
    const result = await api.get('posts')
    return result
  } catch (error) {
    console.error(error)
  }
}

const fetchPost = async (id: string | number) => {
  try {
    const result = await api.get(`posts/${id}`)
    return result
  } catch (error) {
    console.error(error)
  }
}

const storePost = async (post: object) => {
  try {
    const result = await api.post('posts', post)
    return result
  } catch (error) {
    console.error(error)
  }
}

const deletePost = async (id: number | string) => {
  try {
    const result = await api.delete(`posts/${id}`)
    return result
  } catch (error) {
    console.error(error)
  }
}

const updatePost = async (id: number | string, data: object) => {
  try {
    const result = await api.put(`posts/${id}`, data)
    return result
  } catch (error) {
    console.error(error)
  }
}

const updatePostStatus = async (id: number | string, data: object) => {
  try {
    const result = await api.patch(`posts/${id}`, data)
    return result
  } catch (error) {
    console.error(error)
  }
}

export {
  fetchPosts,
  fetchPost,
  storePost,
  deletePost,
  updatePost,
  updatePostStatus
}
