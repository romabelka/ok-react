import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import articles from './fixtures.json'
import App from './app'
import stores from './stores'

ReactDOM.render(<Provider {...stores}>
    <App articles={articles}/>
</Provider>, document.getElementById('root'))
