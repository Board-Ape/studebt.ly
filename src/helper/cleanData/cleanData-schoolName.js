export const cleanData = (schoolObject) => {
  return schoolObject.results.map(schoolObject => {
    console.log(schoolObject);
    const appendPrefix = 'http://'
    const checkHTTPS = new RegExp("^(http|https)://(.*)")
    const string = schoolObject['school.school_url']
    const testString = checkHTTPS.test(string)
    return {
      name: schoolObject['school.name'],
      tuitionInState:
        typeof(schoolObject['2015.cost.tuition.in_state'])==='number'
        ? schoolObject['2015.cost.tuition.in_state'].toLocaleString()
        : ' ¯\\_(ツ)_/¯',
      tuitionOutState:
        typeof(schoolObject['2015.cost.tuition.out_of_state'])==='number'
        ? schoolObject['2015.cost.tuition.out_of_state'].toLocaleString()
        : ' ¯\\_(ツ)_/¯',
      state: schoolObject['school.state'],
      city: schoolObject['school.city'],
      zip: schoolObject['school.zip'],
      url:
        testString
        ? schoolObject['school.school_url']
        : appendPrefix + schoolObject['school.school_url']
    }
  })
}
