import React, { Component } from 'react';
import { connect } from 'react-redux';
import SchoolCard from '../../components/SchoolCard/SchoolCard'
import { fetchSchoolData } from '../../actions'

class SchoolCardContainer extends Component {

  componentDidMount = async () => {
    const schoolData = await fetchSchoolData()
    this.props.storeSchoolData(schoolData)
  }

  render() {
    return(
      <div>
        <SchoolCard />
      </div>
    )
  }
}

export const mapStateToProps = (store) => {
  return {
    schoolNames: store.schoolNames
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    storeSchoolData: (schools) => dispatch(fetchSchoolData(schools))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolCardContainer);
