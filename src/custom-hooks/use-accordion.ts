import {useState, useCallback} from 'react'

export default function useAccordion(defaultOpenId: string) {
    const [openId, setOpenId] = useState(defaultOpenId)

    const toggleOpenItem = useCallback((article: { id: string }) => {
        setOpenId(article.id)
    }, [setOpenId])

    return { toggleOpenItem, openId }
}
