import React, { Component } from 'react'
import Hsearch from './Hsearch/Hsearch'
import Htab from './Htab/Htab'


export default class Header extends Component {
  render() {
    return (
      <div>
        <Hsearch></Hsearch>
        <Htab></Htab>
      </div>
    )
  }
}
