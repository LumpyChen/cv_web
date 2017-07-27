import React from 'react'
import './lastpage.css'

const LastPage = () => (
    <div className="lastpage">
      <div className="title">了解更多</div>
      <div className="job">“期望更好的职业机会，不限工作地点”</div>
      <div className="link">
        <a className="en" href="http://lumpychen.github.io">
          &nbsp;
          <i className="fa fa-home" aria-hidden="true" />
          &nbsp;BLOG
        </a>
        &nbsp;|&nbsp;
        <a className="en" href="http://github.com/lumpychen">
          <i className="fa fa-github" aria-hidden="true" />
          &nbsp;
          GITHUB
        </a>
        </div>
        <div className="download"><a href="./cv.pdf">下载<span className="en">PDF</span>简历</a></div>
        <div className="repo">
          “这个简历源自我的开源小项目
          <a href='http://github.com/lumpychen/cv_web'>react-cv</a>
          ，去看看？”
        </div>
      <div className="mail"><a className="en" href="mailto:Lumpychen@outlook.com">Lumpychen@outlook.com</a></div>
    </div>
)

export default LastPage
