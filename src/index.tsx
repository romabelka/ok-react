import * as React from 'react'
import * as ReactDOM from 'react-dom'
import articles from './fixtures.json'
import App from './app'

ReactDOM.render(<App articles={articles}/>, document.getElementById('root'))
