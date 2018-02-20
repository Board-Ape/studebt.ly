const schoolDataReducer = (state=[], action) => {
  switch (action.type) {
    case 'SCHOOL_DATA_SUCCESS':
      return action.schools

    default:
      return state;
  }
}

export default schoolDataReducer;
