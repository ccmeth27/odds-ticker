import React from 'react'

function Fantasy (props) {
    const { fantasyStats } = props
    
    const renderStats = () => {
        return fantasyStats.map(stat => {
    
        return (
            <div className="marquee">
                <div className="fantasy-player" >
                    <h1>{stat.Position}</h1>
                    <h1>{stat.Team}</h1>
                </div>
                <div className="fantasy-points">
                    <h1>{stat.Name}</h1>
                    <h1>Points: {stat.FantasyPointsYahoo}</h1>
                </div>
            </div>
            )
        })
    }

        return(
            <marquee height="225px" hspace="0px" className="marquee-container" >
                {renderStats()}
            </marquee>
    )
}
export default Fantasy