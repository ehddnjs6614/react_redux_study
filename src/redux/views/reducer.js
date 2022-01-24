import { ADD_VIEW } from './types'

const initialState = {
  count: 0,
}

// reducer은 값 변경을 도와준다
const viewsReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + action.payload,
      }
    default:
      return state
  }
}

export default viewsReducer
