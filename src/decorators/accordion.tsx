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
            openItemId: '56c782f18990ecf954f6e027'
        }

        toggleOpenItem = (item: { id: string }) => this.setState(state => ({
            openItemId: state.openItemId === item.id ? undefined : item.id
        }))

        render() {
            return <OriginalComponent
                {...this.props as T}
                openItemId={this.state.openItemId}
                toggleOpenItem={this.toggleOpenItem}
            />
        }
    }

}
