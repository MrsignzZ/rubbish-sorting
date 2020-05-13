import { http } from './http'; 
import { textUrl, imageUrl } from './config'
const localUrl = 'http://localhost:3000/'

function garbageTextSearch(params) {
  return http(textUrl, 'get', true, params)
}

function garbageImageSearch(params) {
  return http(imageUrl, 'post', false, params)
}

function getTrashList(params) {
  return http(localUrl + 'trashes', 'get', true, params)
}

function createTrash(params) {
  return http(localUrl + 'trashes', 'post', true, params)
}

function findTrashByName(params) {
  return http(localUrl + 'trashes/query', 'get', true, params)
}

export default {
  garbageTextSearch,
  garbageImageSearch,
  getTrashList,
  createTrash,
  findTrashByName
}
