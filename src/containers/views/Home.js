import React from 'react'
import { connect } from "react-redux"
import { fetchNewTime } from "../../redux/actionCreators"

const mapStateToProps = state => {
  return {
    currentTime: state.currentTime
  }
}

const mapDispatchToProps = dispatch => ({
  updateTime: () => dispatch(fetchNewTime())
})

const Home = props => (
  <div><h1>Welcome home</h1>
    <p>Current time: {props.currentTime}</p>
    <button onClick={props.updateTime}>Update time</button></div>
)

export default connect(mapStateToProps, mapDispatchToProps)(Home)