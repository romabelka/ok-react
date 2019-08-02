import * as React from 'react'
import * as ReactDOM from 'react-dom'
import articles from './fixtures.json'
import ArticleList from './article-list'

ReactDOM.render(<ArticleList articles={articles} />, document.getElementById('root'))
