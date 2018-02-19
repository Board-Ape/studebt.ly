export const cleanData = (schoolObject) => {
  return schoolObject.results.map(schoolObject => {

    const commaAddInState = (school) => {
      typeof(schoolObject['2015.cost.tuition.in_state']) === 'number'
      ? schoolObject['2015.cost.tuition.in_state'].toLocalString()
      : schoolObject['2015.cost.tuition.in_state']
    }

    const commaAddOutOfState = (school) => {
     typeof(schoolObject['2015.cost.tuition.out_of_state']) === 'number'
      ? schoolObject['2015.cost.tuition.out_of_state'].toLocalString()
      : schoolObject['2015.cost.tuition.out_of_state']
    }

    return {
      name: schoolObject['school.name'],
      tuitionInState: commaAddInState(schoolObject['2015.cost.tuition.in_state']),
      tuitionOutState: commaAddOutOfState(schoolObject['2015.cost.tuition.out_of_state']),
      state: schoolObject['school.state'],
      city: schoolObject['school.city'],
      zip: schoolObject['school.zip'],
      url: schoolObject['school.school_url'],
    }
  })
}
