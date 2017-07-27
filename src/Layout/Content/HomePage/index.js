import React from 'react'
import './homepage.css'

const HomePage = ({ ori }) => (
    <div className="homepage">
      <div className="avatar"/>
      <div className="name">陈翊文</div>
      <div className="job">前端工程师</div>
      {ori ? <div className="tip">为了您的体验，建议横屏浏览</div> : ''}
      <div className="link">
        <a className="en" href="http://lumpychen.github.io">
          &nbsp;
          <i className="fa fa-home" aria-hidden="true" />
          &nbsp;BLOG
        </a>
        &nbsp;|&nbsp;
        <a className="en" href="http://www.github.com/lumpychen">
          <i className="fa fa-github" aria-hidden="true" />
          &nbsp;
          GITHUB
        </a>
      </div>
      <div className="mail"><a className="en" href="mailto:lumpychen@outlook.com">Lumpychen@outlook.com</a></div>
    </div>
)

export default HomePage
