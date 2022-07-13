const initialState = {
  userValue: '',
}

const titleReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ONCHANGE':
      return {
        ...state,
        userValue: action.value,
    }
    default:
      return state
  }
}
export default titleReducer