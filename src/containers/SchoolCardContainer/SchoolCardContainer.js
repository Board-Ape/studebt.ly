import React, { Component } from 'react';
import { connect } from 'react-redux';
import SchoolCard from '../../components/SchoolCard/SchoolCard'
import { fetchSchoolData } from '../../actions'

class SchoolCardContainer extends Component {

  componentDidMount = async () => {
    const schoolData = await fetchSchoolData()
    this.props.storeSchoolData(schoolData)
  }

  renderSchoolContainer = () => {
    const schoolArray = this.props.schoolNames.map((school, index) => {
      return(
        <div>
          <SchoolCard
            key={index}
            school={school}
          />
        </div>
      )
    });
    return schoolArray
  }

  render() {
    return(
      <div>
        {this.renderSchoolContainer()}
      </div>
    )
  }
}
export const mapStateToProps = (store) => {
  return {
    schoolNames: store.schoolDataReducer
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    storeSchoolData: (schools) => dispatch(fetchSchoolData(schools))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolCardContainer);
