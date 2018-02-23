import React, { Component } from 'react';
import { connect } from 'react-redux';
import SchoolCard from '../../components/SchoolCard/SchoolCard';
import { fetchSchoolData } from '../../actions';
import './SchoolCardContainer.css';

class SchoolCardContainer extends Component {

  componentDidMount = async () => {
    const schoolData = await fetchSchoolData();
    this.props.storeSchoolData(schoolData);
  }

  renderSchoolContainer = () => {
    const schoolArray = this.props.schoolNames.map((school, index) => {
      return (
          <SchoolCard
            key={index}
            school={school}
          />
      );
    });
    return schoolArray;
  }

  render() {
    return (
      <div className="card-container">
        {this.renderSchoolContainer()}
      </div>
    );
  }
}
export const mapStateToProps = (store) => {
  return {
    schoolNames: store.schoolDataReducer
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    storeSchoolData: (schools) => dispatch(fetchSchoolData(schools))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolCardContainer);
