import * as React from 'react'
import {Subtract} from 'utility-types'

interface State {
    openItemId?: string
}

interface AdditionalProps {
    openItemId?: string
    toggleOpenItem: (item: { id: string }) => void
}

export default function withAccordion<T extends AdditionalProps>(OriginalComponent: React.ComponentType<T>) {

    return class Accordion extends React.Component<Subtract<T, AdditionalProps>, State> {
        state: State = {
            openItemId: undefined
        }

        toggleOpenItem = (item: { id: string }) => this.setState({
            openItemId: item.id
        })

        render() {
            return <OriginalComponent
                {...this.props as T}
                openItemId={this.state.openItemId}
                toggleOpenItem={this.toggleOpenItem}
            />
        }
    }

}
