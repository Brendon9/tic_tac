import fetch from 'isomorphic-fetch'
import normalize from 'json-api-normalizer'

import { API_DATA_REQUEST, API_DATA_SUCCESS, API_DATA_FAILURE } from '../state/action-types'

const API_ROOT = 'https://r3pi-ttt.herokuapp.com/api'

// -- Options
export const getCropOptions = () =>
  fetch(`${API_ROOT}/crops/`, {
    credentials: 'same-origin'
  })
  .then(_checkStatus)
  .then(response => response.json())


function callApi(endpoint, options = {}) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(fullUrl, options)
    .then(response => response.json()
      .then((json) => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        return Object.assign({}, normalize(json, { endpoint }))
      }),
    )
}

export const CALL_API = Symbol('Call API')

export default function (store) {
  return function nxt(next) {
    return function call(action) {
      const callAPI = action[CALL_API]

      if (typeof callAPI === 'undefined') {
        return next(action)
      }

      let { endpoint } = callAPI
      const { options } = callAPI

      if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
      }

      if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
      }

      const actionWith = (data) => {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
      }

      next(actionWith({ type: API_DATA_REQUEST, endpoint }))

      return callApi(endpoint, options || {})
        .then(
          response => next(actionWith({ response, type: API_DATA_SUCCESS, endpoint })),
          error => next(actionWith({ type: API_DATA_FAILURE, error: error.message || 'Something bad happened', endpoint })),
        )
    }
  }
}
