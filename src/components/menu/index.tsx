import * as React from 'react'

const Menu: React.FC = ({ children }) => {
    return (
        <div>
            <h1>Main Menu</h1>
            {React.Children.map(children, (child, idx) => <div key={idx}>{child}</div>)}
        </div>

    )
}

export default Menu
