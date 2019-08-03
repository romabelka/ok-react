import {configure} from 'mobx'
import ArticlesStore from './articles'

configure({
    enforceActions: 'always'
})

export interface IStores {
    articlesStore: ArticlesStore
}

const stores: IStores = {
    articlesStore: new ArticlesStore()
}

;(window as any).stores = stores

export default () => ({
    articlesStore: new ArticlesStore()
})
