import React, {Component} from 'react'
import {render} from 'react-dom'

import {AuthForm} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>react-authform Demo</h1>
      <AuthForm />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
