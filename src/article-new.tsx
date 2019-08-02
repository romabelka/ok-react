import React from 'react'
import {IArticle} from './article'
import {Consumer} from './contexts/username';

interface Props {
    article: IArticle,
    isOpen: boolean,
    onBtnClick: (article: IArticle) => void
}

export default function ArticleNew({ article, isOpen, onBtnClick }: Props) {
    return (
        <div>
            <h3>{article.title}</h3>
            <button onClick = {() => onBtnClick(article)}>
                {isOpen ? 'close' : 'open'}
            </button>
            {isOpen && <section>{article.text}</section>}
            <Consumer>
                {(username) => <h3>{username}</h3>}
            </Consumer>
        </div>
    )
}
