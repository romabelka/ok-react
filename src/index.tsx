import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Article from './article'
import articles from './fixtures.json'

ReactDOM.render(<Article article={articles[0]} />, document.getElementById('root'))
