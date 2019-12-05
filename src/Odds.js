import React from "react";

function Odds (props) {
    const { games } = props
    
    const renderGames = () => {
        console.log(games)
        return games.map(game => {
            return (
                <div className="marquee">
                    <div className="teams" >
                        <h1>{game.AwayTeamName}</h1>
                        <h1>{game.HomeTeamName}</h1>
                    </div>
                    <div className="current-odds">
                        <h1>{game.AlternateMarketPregameOdds[0].OverUnder}</h1>
                        <h1>{game.AlternateMarketPregameOdds[0].HomePointSpread}</h1>
                    </div>
                    <div className="moneylines">
                        <h1>{game.AlternateMarketPregameOdds[0].AwayMoneyLine}</h1>
                        <h1>{game.AlternateMarketPregameOdds[0].HomeMoneyLine}</h1>
                    </div>
                </div>
            )
        })
    }

    // render () {
        return(
            <marquee height="225px" hspace="0px" className="marquee-container" >
                {renderGames()}
            </marquee>
        )
    // }
    

}
export default Odds
  