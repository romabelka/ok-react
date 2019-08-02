import * as React from 'react'
import {IArticle} from '../article'


interface State {
    openItemId?: string
}

export default class Accordion<T> extends React.Component<T, State> {
    state: State = {
        openItemId: undefined
    }

    toggleOpenItem = (article: IArticle) => this.setState({ openItemId: article.id })
}
