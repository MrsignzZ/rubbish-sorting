import { http } from './http'; 
import { textUrl, imageUrl } from './config'
import { getStorage } from "./util";

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

function getQuestionsList(params) {
  return http(localUrl + 'questions', 'get', true, params)
}

function createRank(params) {
  const token = getStorage('TOKEN')
  return http(localUrl + 'ranks', 'post', true, params, token)
}

function updateScore(id, params) {
  const token = getStorage('TOKEN')
  return http(`${localUrl}ranks/${id}`, 'put', true, params, token)
}

function updateUser(id, params) {
  const token = getStorage('TOKEN')
  return http(`${localUrl}users/${id}`, 'put', true, params, token)
}

function login(params) {
  return http(localUrl + 'users/login', 'post', true, params)
}

function register(params) {
  return http(localUrl + 'users', 'post', true, params)
}

function getRank(params) {
  return http(localUrl + 'ranks', 'get', true, params)
}

export default {
  garbageTextSearch,
  garbageImageSearch,
  getTrashList,
  createTrash,
  findTrashByName,
  getQuestionsList,
  updateScore,
  updateUser,
  login,
  createRank,
  register,
  getRank
}
