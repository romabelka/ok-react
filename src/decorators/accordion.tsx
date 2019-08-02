import * as React from 'react'
import {IArticle} from '../article'

interface State {
    openItemId?: string
}

interface AdditionalProps {
    openItemId?: string
    toggleOpenItem: (item: IArticle) => void
}

export default function withAccordion<T>(OriginalComponent: React.ComponentType<T & AdditionalProps>) {
    return class Accordion extends React.Component<T, State> {
        state: State = {
            openItemId: undefined
        }

        toggleOpenItem = (item: IArticle) => this.setState({
            openItemId: item.id
        })

        render() {
            return <OriginalComponent
                {...this.props}
                openItemId={this.state.openItemId}
                toggleOpenItem={this.toggleOpenItem}
            />
        }
    }

}
