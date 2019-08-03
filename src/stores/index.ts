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

export default stores
