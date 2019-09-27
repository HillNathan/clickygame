import React from "react"

function Header(props) {
    console.log(props)

    return (
        <nav className="navbar sticky full-width">
            <div className="navbar-brand p-4">
                <h4>Clicky Game</h4>
            </div>
                    
            <div className="header header-center text-center">
                <h4>{ props.message }</h4>
            </div>

            <div className="header header-left p-2 m-2">
                Current Score: <span>{ props.currentScore }</span>
                <hr />
                Highest Score: <span>{ props.bestScore }</span>
            </div>
        </nav>
    )
}

export default Header