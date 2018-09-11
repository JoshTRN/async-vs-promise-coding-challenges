import React, { Component } from 'react';
import './App.css';
import Gist from 'super-react-gist';
import './components/css/gist.css'

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-center jumbotron">React Coding Challenges!</h1>
        </header>
        {/* <p className="text-center">{this.state.response}</p> */}
        <div className='col-12 col-md-6'>
          <button style={{width: "100%"}} classNam="btn"type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">PythonGist</button>
          <div style={{margin: '10px 0 10px 0'}} className="collapse" id="collapseExample">
            <Gist url="https://gist.github.com/JoshTRN/cda9530e9a905e26c978253984fb47eb" />
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <button style={{width: "100%"}} classNam="btn"type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">PythonGist</button>
          <div style={{marginTop: '10px'}} className="collapse" id="collapseExample2">
            <Gist url="https://gist.github.com/JoshTRN/cda9530e9a905e26c978253984fb47eb" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
