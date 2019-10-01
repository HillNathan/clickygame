import React from "react"

function Game(props) {
    return (
        <div className="container">
            <div className="row justify-content-between p-5 m-2">
                {props.logos.map((elem,i) => {
                    return (
                        <div className="col text-center p-4 hero-logo">
                            <img src={elem.image} 
                                key={i}
                                className="clicky" alt={elem.alt} 
                                onClick={() => props.logoClick(elem.id)}/>
                        </div>
                    )
                    })
                }
            </div>         
        </div> 
    )
}

export default Game