import React from "react"

function Game(props) {
    return (
        <div class="container">
            <div class="row justify-content-between p-5 m-2">
                {props.logos.map((elem,i) => {
                    return (
                        <div class="col text-center p-4 hero-logo">
                            <img src={elem.image} 
                                class="clicky" alt={elem.alt} 
                                onClick={() => props.setMessage(elem.alt)}/>
                        </div>
                    )
                    })
                }
            </div>         
        </div> 
    )
}

export default Game