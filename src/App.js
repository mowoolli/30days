import React from 'react'
import "whatwg-fetch"
import TimeForm from "./TimeForm"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.fetchCurrentTime = this.fetchCurrentTime.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      currentTime: null, areaLocation: "America/Los_Angeles", tz: "PST8PDT"
    }
  }

  fetchCurrentTime() {
    fetch(this.getApiUrl())
      .then(resp => resp.json())
      .then(resp => {
        const currentTime = resp.datetime;
        this.setState({ currentTime })
      })
  }
  getApiUrl() {
    const { tz, areaLocation } = this.state;
    const host = "http://worldtimeapi.org/api/timezone"
    return host + "/" + tz;
  }
  handleFormSubmit(evt) {
    this.fetchCurrentTime();
  }
  handleChange(newState) {
    this.setState(newState);
  }

  render() {
    const { currentTime, tz } = this.state
    const apiUrl = this.getApiUrl()

    return (<div>{!currentTime && <button onClick={this.fetchCurrentTime}>Get the current time</button>}{currentTime && <div>The current time is: {currentTime}</div>}<TimeForm onFormSubmit={this.handleFormSubmit} onFormChange={this.handleChange} tz={tz} areaLocation={"now"} /><p>We'll be making a request from: <code>{apiUrl}</code></p></div>)
  }
}

export default App;
