import React from 'react';
import axios from 'axios';
import './App.css';


function getResume() {
  return axios.get("https://srikar-resume.herokuapp.com/resume");
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { resume: null };
  }


  render() {




    getResume().then(result => {
      this.setState({ resume: result.data });
    });


    return (
      <div className='container'>
        {
          this.state.resume == null ? (<h4> Resume is loading </h4>) : (<div>


            <h1 className="bg-danger"> Hello, my name is {this.state.resume.name}. </h1>
            <h3 className="bg-success"> I am {this.state.resume.age} years old! </h3>
            <h3 className="bg-info"> I got a {this.state.resume.gpa} out of 4.3 GPA!</h3>
            <h2 className="bg-warning"> This is my Resume ꜜꜜꜜꜜꜜꜜ</h2>

            <h3 className="bg-danger"> HOBBIES: </h3>
            <ul className="bg-danger">
              {this.state.resume.hobbies.map(hobby => <li className='list-group-item'>{hobby}</li>)}
            </ul>

            <h3 className="bg-success"> SPORTS: </h3>
            <ul className="bg-success">
              {this.state.resume.sports.map(sport => <li className='list-group-item'>{sport}</li>)}
            </ul>

            <h3 className="bg-info"> COURSES I HAVE TAKEN: </h3>
            <ul className="bg-info">
              {this.state.resume.courses.map(course => <li className='list-group-item'>{course}</li>)}
            </ul>

            <h3 className="bg-warning"> AWARDS: </h3>
            <ul className="bg-warning">
              {this.state.resume.awards.map(award => <li className='list-group-item'>{award}</li>)}
            </ul>

            <img src="nhdpicture.jpg" className="profile-image" alt="Picture of me." />
            <img src="portrait.jpg" className="portrait-image" alt="Portrait I drew of myself with my left hand (non-dominant hand)." />
          </div>)
        }
      </div>
    );
  }
}

export default App;
