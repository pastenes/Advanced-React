import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from '../components/Meta'

export default class Pages extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    )
  }
}
