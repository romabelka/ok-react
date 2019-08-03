import * as React from 'react'
import {findDOMNode} from 'react-dom'
import ArticleList from './article-list'
import {IArticle} from './article'
import {Provider} from './contexts/username';
import EndorphinComponent from './components/endorphin-component'

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

    headerRef: React.RefObject<HTMLHeadingElement> = React.createRef()
    endorphinRef: React.RefObject<EndorphinComponent> = React.createRef()

    handleUserChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            username: ev.target.value
        })
    }

    componentDidMount(): void {
        console.log('---', 'header', this.headerRef.current)
        if (this.endorphinRef.current) {
            console.log('---', 'endorphin', this.endorphinRef.current.start())
            console.log('---', 'endorphin element', findDOMNode(this.endorphinRef.current))

        }
    }

    setContainerRef = (container: HTMLElement | null) => console.log(container)

    render() {
        return (
            <Provider value={this.state.username}>
                <div ref={this.setContainerRef}>
                    <h1 ref={this.headerRef}>Mega App</h1>
                    Username: <input value={this.state.username} onChange={this.handleUserChange}/>
                    <EndorphinComponent ref={this.endorphinRef}/>
                    <ArticleList articles={this.props.articles}/>
                </div>
            </Provider>
        )
    }
}
