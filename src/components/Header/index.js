import React from "react"

function Header() {
    return (
        <nav class="navbar sticky full-width">
            <div class="navbar-brand p-4">
                <h4>Clicky Game</h4>
            </div>
                    
            <div class="header header-center text-center">
                <h4>Message to go here</h4>
            </div>

            <div class="header header-left p-2 m-2">
                Current Score: <span>##</span>
                <hr />
                Highest Score: <span>##</span>
            </div>
        </nav>
    )
}

export default Header