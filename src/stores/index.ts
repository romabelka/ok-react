import {configure} from 'mobx'
import ArticlesStore from './articles'

configure({
    enforceActions: 'never'
})

export interface IStores {
    articlesStore: ArticlesStore
}

const stores: IStores = {
    articlesStore: new ArticlesStore()
}

export default stores
