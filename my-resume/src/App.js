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

            <h1> NAME: </h1>
            <h1> {this.state.resume.name} </h1>
            <h1> AGE: </h1>
            <h2> {this.state.resume.age} </h2>
            <h1> GPA OUT OF 4.3: </h1>
            <h2> {this.state.resume.gpa} </h2>


            <h2> HOBBIES: </h2>
            <ul className="list-group">
              {this.state.resume.hobbies.map(hobby => <li className='list-group-item'>{hobby}</li>)}
            </ul>

            <h2> SPORTS: </h2>
            <ul className="list-group">
              {this.state.resume.sports.map(sport => <li className='list-group-item'>{sport}</li>)}
            </ul>

            <h2> COURSES I HAVE TAKEN: </h2>
            <ul className="list-group">
              {this.state.resume.courses.map(course => <li className='list-group-item'>{course}</li>)}
            </ul>

            <h2> AWARDS: </h2>
            <ul className="list-group">
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
