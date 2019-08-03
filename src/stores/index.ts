import {configure} from 'mobx'
import ArticlesStore from './articles'

configure({
    enforceActions: 'never'
})


export default new ArticlesStore()
