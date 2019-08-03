import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {Provider} from 'mobx-react'
import App from './app'
import stores from './stores'

ReactDOM.render(<Provider {...stores}>
    <App />
</Provider>, document.getElementById('root'))
