import { SCHOOL_API_KEY } from '../../settings.js'

export const getSchoolData = async () => {
  try {
  const initialFetch = await fetch(`https://api.data.gov/ed/collegescorecard/v1/schools.json?school.degrees_awarded.predominant=2,3&_fields=id,school.name,2013.student.size&api_key=${SCHOOL_API_KEY}`)
  const responseObject = await initialFetch.json();

  return responseObject;
  } catch (type) {
    return Error('Fetch schools was unsuccessful!')
  }
}
