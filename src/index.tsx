import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {renderToString} from 'react-dom/server'
import {Provider} from 'mobx-react'
import App from './app'
import createStores from './stores'


const serverStores = createStores()

serverStores.articlesStore.isReady.then(() => {
    const app = (
        <Provider {...serverStores}>
            <App />
        </Provider>
    )

    const html = renderToString(app)

    const template = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <title>React App</title>
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <script>
                window.ARTICLES_STORE_INITIAL_STATE = ${serverStores.articlesStore.dehydrate()}
            </script>
            <div id="root">${html}</div>
          </body>
        </html>
    `

    document.getElementById('root')!.innerHTML = html
})


setTimeout(() => {
    const clientStores = createStores()

    ReactDOM.hydrate((
        <Provider {...clientStores}>
            <App />
        </Provider>
    ), document.getElementById('root'))
}, 5000)

//ReactDOM.render(app, document.getElementById('root'))
