import React, { Component } from 'react'
import Tab from '@/components/Tab/Tab'

export default class Main extends Component {
  render() {
    return (
      <div>
        <Tab></Tab>
        {this.props.children}
      </div>
    )
  }
}

