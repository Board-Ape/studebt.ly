export const schoolDataSuccess = (schools) => ({
    type: 'SCHOOL_DATA_SUCCESS',
    schools
});

export const fetchSchoolData = () => {
  return async (dispatch) => {
    const initialFetch = await fetch('https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size&api_key=ubCKUJm6gZjJgKPmID6SDtnOjKX9exhqhVjYzTBT')
    const responseObject = await initialFetch.json()
    dispatch(schoolDataSuccess(responseObject))
  }
}
