import './App.css'
import React, { Component } from 'react'
import Nav from './components/Nav'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

export default class App extends Component {

  state = {
    progress: 0
  }

  setProgress=(progress)=> {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <Nav />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          {/* <News setProgress={this.setProgress}  pagesize={10} country={"in"} category="sports"/> */}
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress}  key="general" pagesize={10} country={"in"} category="general" />} />
            <Route exact path="/buisness" element={<News setProgress={this.setProgress}  key="buisness" pagesize={10} country={"in"} category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pagesize={10} country={"in"} category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress}  key="general" pagesize={10} country={"in"} category="general" />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress}  key="health" pagesize={10} country={"in"} category="health" />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key="science" pagesize={10} country={"in"} category="science" />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress}  key="sports" pagesize={10} country={"in"} category="sports" />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key="technology" pagesize={10} country={"in"} category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}



