import { cleanData } from '../cleanData/cleanData-schoolName'

// knex('colleges').select('*').then(res => console.log(res))

export const getSchoolData = () => {
  console.log('In apiCalls');
  try {
  const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://localhost/studebtly',
  });

  console.log('In apiCalls try block');
  console.log(knex('colleges').select('*').then(res => res).then(object => object.json()))
    .then(response => console.log(response))
    .then(responseObject => console.log(responseObject))
  // const cleanSchoolData = cleanData(responseObject);

  return
  } catch (type) {
    return Error('Fetch schools was unsuccessful!')
  }
}
