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
            <ul className="list-group">
              {this.state.resume.name.map(name => <li className='list-group-item'>{name}</li>)}
            </ul>
            <h1> AGE: </h1>
            <ul className="list-group">
              {this.state.resume.age.map(age => <li className='list-group-item'>{age}</li>)}
            </ul>
            <h1> GPA OUT OF 4.3: </h1>
            <ul className="list-group">
              {this.state.resume.gpa.map(gpa => <li className='list-group-item'>{gpa}</li>)}
            </ul>


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

            <img src="nhdpicture.jpg" className="profile-image" alt="morty junior" />
          </div>)
        }
      </div>
    );
  }
}

export default App;
