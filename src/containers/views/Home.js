import React from 'react'
import { Link } from "react-router-dom"

const Home = () => (
  <div><h1>Welcome home</h1>
    <Link to="/about">Go to about</Link></div>
)

export default Home