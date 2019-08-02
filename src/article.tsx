import * as React from 'react'

export interface IArticle {
    id: string
    title: string
    text: string
    date: string
    comments?: IComment[]
}

interface IComment {
    id: string
    user: string
    text: string
}

interface Props {
    article: IArticle
}

interface State {
    isOpen: boolean
    foo: string
}

export default class Article extends React.Component<Props, State> {
    state: State = {
        isOpen: true,
        foo: 'bar'
    }

    render() {
        const { article } = this.props
        return (
            <>
                <h1>{article.title}</h1>
                <button onClick = {this.toggleOpen}>
                    {this.state.isOpen ? 'close' :'open'}
                </button>
                {this.getBody()}
            </>
        )
    }

    toggleOpen = () => {
        this.setState(state => ({
            isOpen: !state.isOpen  //true -> false
        }))

    }

    getBody() {
        if (!this.state.isOpen) return null

        return (
            <section>{this.props.article.text}</section>
        )
    }
}
