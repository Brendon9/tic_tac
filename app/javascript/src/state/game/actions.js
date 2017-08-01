import { CALL_API } from '../../api'

export const getGamesCollection = () => {
  return {
    [CALL_API]: {
      endpoint: '/games',
      options: {
        method: 'GET',
        credentials: 'same-origin'
      }
    }
  }
}

export const postGame = (data) => (dispatch, getState) => {
  return dispatch({
    [CALL_API]: {
      endpoint: '/games',
      options: {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify({ data: { attributes: data } }),
        headers: { 'Content-Type': 'application/json' }
      }
    }
  }).then(() => getGamesCollection())
}
