'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');
import axios from 'axios';
// const api = require('./api');
// import './api';

const root = '/api';

class App extends React.Component {
  render() {
    return (
      <Upload />
    )
  }
}

class Upload extends React.Component {
  constructor(props) {
    super(props);
    // this.state = { selectedFile: null };
    this.onFileChangeHandler = this.onFileChangeHandler.bind(this);
  }

  onFileChangeHandler(e) {
    // console.log("k man");
    e.preventDefault();
    // this.setState({
    //   selectedFile: e.target.files[0]
    // });
    const formData = new FormData();
    // formData.append('file', this.state.selectedFile);
    formData.append('file', e.target.files[0]);

    // Options for sending the data:
    //
    // Option 1, fetch
    // fetch('http://localhost:8080/api/upload', {
    //   method: 'post',
    //   body: formData
    // }).then(res => {
    //   if(res.ok) {
    //     console.log("k man");
    //     console.log(res.data);
    //     alert("File uploaded successfully.");
    //   }
    // });

    // Option 2, client
    client({
      method: 'POST',
      path: '/api/upload',
      entity: formData,
      headers: {'Content-Type': 'multipart/form-data'}
    }).done(res => {
      console.log(res.data);
      alert("File uploaded successfully.");
    });

    // Option 3, axios
    // ok this shit has to work somehow, but I can't figure out the confusing
    // ass import and export styles of javascript. Unhelpfully, the guide
    // I'm following did not provide an example of how our ApiService is
    // imported.
    // Alright, I got it working by skipping the extra file and simply using
    // axios inline, thereby bypassing any need for import/export other than
    // importing axios itself, which they did provide the import statement for.
    // Notably, console.log(res.data) is an empty string for axios, but
    // undefined for both fetch and client.
    // axios.post("http://localhost:8080/api/upload", formData)
    //   .then(res => {
    //     console.log(res.data);
    //     alert("File uploaded successfully.")
    //   });
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group files color">
              <label>Upload Your File </label>
              <input type="file" className="form-control" name="file"
                onChange={this.onFileChangeHandler}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('react')
)
