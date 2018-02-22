import { cleanData } from '../cleanData/cleanData-schoolName'

const knex = require('knex')({
  client: 'pg',
  connection: 'postgres://localhost/studebtly',
});
// knex('colleges').select('*').then(res => console.log(res))

export const getSchoolData = async () => {
  console.log('In apiCalls');
  try {

  console.log('In apiCalls try block');
  const initialFetch = knex('colleges').select('*')
  console.log(initialFetch);
  const responseObject = initialFetch.json();
  const cleanSchoolData = await cleanData(responseObject);

  return cleanSchoolData;
  } catch (type) {
    return Error('Fetch schools was unsuccessful!')
  }
}
