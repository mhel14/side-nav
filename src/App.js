import React, { Component } from 'react';
import SideNav from './SideNav';

class App extends Component {
  state = {
    courseSelected: [],
    courses: [],
    isLoaded: false,
    error: null
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/mhel14/courses/db')
      .then(result => result.json())
      .then(
        result => {
          this.setState({
            courseSelected: result.units,
            courses: result.units,
            isLoaded: true
          })
          // console.log(result.units);
          // console.log(this.state.isLoaded)
        },
        error => {
          console.log(error)
        }
      )
  }

  filterUnit = (arr, searchKey) => {
    return arr.filter(obj => Object.keys(obj).some(key => obj[key].toLowerCase().includes(searchKey)));
  }

  searchHandler = (searchVal) => {
    const { courses } = this.state;
    // console.log(this.filterUnit(courses, searchVal));
    const searchResult = this.filterUnit(courses, searchVal);
    this.setState({
      courseSelected: searchResult
    })
  }

  render() {
    const {courseSelected, isLoaded} = this.state
    
    return (
      <div className="App">
        <SideNav searchHandler={this.searchHandler} course={courseSelected} loaded={isLoaded} />
      </div>
    );
  }
}

export default App;
