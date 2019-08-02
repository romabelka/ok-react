import * as React from 'react'
import ArticleList from './article-list'
import {IArticle} from './article'
import {Provider} from './contexts/username';

interface Props {
    articles: IArticle[]
}

interface State {
    username: string
}

export default class App extends React.Component<Props, State> {
    state: State = {
        username: 'Oleg'
    }

    handleUserChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: ev.target.value
        })
    }

    render() {
        return (
            <Provider value={this.state.username}>
                <div>
                    <h1>Mega App</h1>
                    Username: <input value={this.state.username} onChange={this.handleUserChange}/>
                    <ArticleList articles={this.props.articles} toggleOpenItem={() => {}}/>
                </div>
            </Provider>
        )
    }
}
