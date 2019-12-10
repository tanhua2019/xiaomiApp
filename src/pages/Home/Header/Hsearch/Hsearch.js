import React, { Component } from 'react'
import './Hsearch.less'
import { Link } from 'react-router-dom'

export default class Hsearch extends Component {
  render() {
    return (
      <div className="header-search">
        <div className="search-icon"></div>
        <Link to="/home" className="search">
          <div className="search-sousuo">
            <i className="iconfont iconsousuo" />
          </div>
        </Link>
        <Link to="/user" className="search-person">
          <div className="person-icon">
            <i className="iconfont icontubiao-" />
          </div>
        </Link>
      </div>
    )
  }
}
