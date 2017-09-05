import React from 'react'
import './lastpage.css'

const isPC = () => {
    var userAgentInfo = navigator.userAgent
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"]
    var flag = true
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
        }
    }
    return flag
}

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
        <div className="download"><a href="http://lumpychen.github.io/cv_web/cv.pdf">下载<span className="en">PDF</span>简历</a></div>
        <div className="repo">
          “这个简历源自我的开源小项目
          <a className="en" href='http://github.com/lumpychen/cv_web'>react-cv</a>
          ，去看看？”
        </div>
      <div className="mail"><a className="en" href="mailto:Lumpychen@outlook.com">Email：Lumpychen@outlook.com</a></div>
      {isPC() ? (<div className="qrwrap">
        <span>想要预览项目实例？扫描二维码在移动端打开：</span>
        <div className="qrcode" />
      </div>) : null}
    </div>
)

export default LastPage
