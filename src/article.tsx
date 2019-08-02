import * as React from 'react'

interface IArticle {
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
}

export default class Article extends React.Component<Props, State> {
    render() {
        const { article } = this.props
        return (
            <div>
                <h1>{article.title}</h1>
                <section>{article.text}</section>
            </div>
        )
    }
}
