import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Hammer from 'react-hammerjs'

import Frame from './Components/Frame'
import Menu from './Components/Menu'
import HomePage from './Content/HomePage'
import Internship from './Content/Internship'
import Project from './Content/Project'
import Advantage from './Content/Advantage'
import Education from './Content/Education'
import LastPage from './Content/LastPage'
import '../style/animate.css'

const history = createHistory()

const PageSwitch = (props) => (
  <CSSTransition
    {...props}
    timeout={1000}
  />
)




class Layout extends Component {
  constructor (props) {
    super(props)
    this.canRun = true
    this.switch = 'up'
    this.ori = (window.innerWidth > window.innerHeight) ? false : true;
  }
  componentWillMount () {
    window.addEventListener('resize', () => {
      this.ori = (window.innerWidth > window.innerHeight) ? false : true;
      this.forceUpdate()
    }, false)
  }
  switchPage(dir) {
    const arr = ['/firstpage', '/internship', '/project', '/advantage', '/education', '/lastpage']
    let index = 0
    arr.forEach((ele, i) => {
      if (ele === this.props.location.pathname) {
        index = i
      }
    })
    if (dir === 'up') {
      index++
      if (index === arr.length) {
        index = 0
      }

    } else if (dir === 'down') {
      index--
      if (index === -1) {
        index = arr.length -1
      }
    }

    return arr[index]
  }
  handleSwipe(e) {
    if (this.canRun) {
      this.canRun = false
      if(e.angle < 0) {
        this.switch = 'up'
        this.forceUpdate()
        setTimeout(() => {
          this.props.history.push(this.switchPage('up'))
        }, 0)
      } else {
        this.switch = 'down'
        this.forceUpdate()
        setTimeout(() => {
          this.props.history.push(this.switchPage('down'))
        }, 0)
      }
      setTimeout(() => {
          this.canRun = true;
      }, 1500)
    }
  }
  handleWheel(e) {
    if (this.canRun) {
      this.canRun = false
      if(e.deltaY > 0) {
        this.switch = 'up'
        this.forceUpdate()
        setTimeout(() => {
          this.props.history.push(this.switchPage('up'))
        }, 0)
      } else {
        this.switch = 'down'
        this.forceUpdate()
        setTimeout(() => {
          this.props.history.push(this.switchPage('down'))
        }, 0)
      }
      setTimeout(() => {
          this.canRun = true;
      }, 1500)
    }
  }
  render() {
    return (
      <Hammer onWheel={(e) => this.handleWheel(e)} onSwipe={(e) => this.handleSwipe(e)} direction="DIRECTION_VERTICAL">
        <div className="App">
        <Menu />
        <TransitionGroup>
          <PageSwitch key={this.props.location.key} classNames={`switch-${this.switch}`}>
            <Frame>
              <Switch key={this.props.location.key} location={this.props.location}>
                <Route exact path='/internship' component={Internship}/>
                <Route exact path='/project' component={Project}/>
                <Route exact path='/advantage' component={Advantage}/>
                <Route exact path='/education' component={Education}/>
                <Route exact path='/lastpage' component={LastPage}/>
                <Route path='/firstpage' render={(ori=true) => (<HomePage ori={this.ori} />)}/>
                <Redirect from='*' to='/firstpage'/>
              </Switch>
            </Frame>
          </PageSwitch>
        </TransitionGroup>
        </div>
      </Hammer>
    );
  }
}

const App = () => (
  <Router history={history}>
    <Route render={({ history, location }) => (
        <Layout history={ history } location={ location } />
    )} />
  </Router>
)

export default App;
