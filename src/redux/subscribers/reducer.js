import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types'

const initialState = {
  count: 370, // 기본값으로 고정
}

const subscribersReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_SUBSCRIBER:
      return {
        ...state,
        count: state.count + 1,
      }

    // eslint-disable-next-line no-duplicate-case
    case REMOVE_SUBSCRIBER:
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return state
  }
}

export default subscribersReducer
