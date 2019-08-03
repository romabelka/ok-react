import * as React from 'react'
import {Consumer} from '../../contexts/username';

interface Props {
    subMenu: () => React.ReactNode
}

const Menu: React.FC<Props> = ({ children, subMenu }) => {
    return (
        <div>
            <h1>Main Menu</h1>
            {React.Children.map(children, (child, idx) => <div key={idx}>{child}</div>)}
            <section>
                {subMenu()}
            </section>
            <Consumer>
                {(username) => <h3>{username}</h3>}
            </Consumer>
        </div>

    )
}

export default Menu
