import { SCHOOL_API_KEY } from '../../settings.js'
import { cleanData } from '../cleanData/cleanData-schoolName'

export const getSchoolData = async () => {
  try {
  const initialFetch = await fetch(`https://api.data.gov/ed/collegescorecard/v1/schools.json?_fields=id,school.faculty_salary,school.school_url,school.name,school.state,school.city,school.zip,2015.cost.tuition.in_state,2015.cost.tuition.out_of_state&_per_page=100&_page=1&api_key=${SCHOOL_API_KEY}`)
  const responseObject = await initialFetch.json();
  const cleanSchoolData = await cleanData(responseObject);

  return cleanSchoolData;
  } catch (type) {
    return Error('Fetch schools was unsuccessful!')
  }
}
