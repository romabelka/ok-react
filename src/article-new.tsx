import React, {useState, useEffect, useCallback} from 'react'
import {IArticle} from './article'

interface Props {
    article: IArticle
}

export default function ArticleNew({ article }: Props) {
    const [isOpen, setOpen] = useState(false)
    const [counter, setCounter] = useState(42)
    useEffect(() => {
        console.log('--- update', 123)
        return () => console.log('--- cleanup', 321)
    })

    const toggleOpen = useCallback(() => setOpen(!isOpen), [setOpen, isOpen])

    return (
        <div>
            <h3>{article.title}</h3>
            <button onClick = {toggleOpen}>
                {isOpen ? 'close' : 'open'}
            </button>
            {isOpen && <section>{article.text}</section>}
        </div>
    )
}
