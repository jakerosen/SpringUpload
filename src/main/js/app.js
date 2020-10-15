'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

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
