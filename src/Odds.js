import React from "react";

class Odds extends React.Component {


    loadAllGames = () => {
        let gameArray = {}
        return Object.keys(this.props.games).map(game => {
            gameArray = this.props.games[game]
        //     console.log(gameArray)
            return (
                <div className="marquee">
                    <div className="teams" >
                        <h1>{gameArray.AwayTeam}</h1>
                        <h1>{gameArray.HomeTeam}</h1>
                    </div>
                    <div className="current-odds">
                        <h1>{gameArray.Odds[0].TotalNumber}</h1>
                        <h1>{gameArray.Odds[0].PointSpreadHome}</h1>
                    </div>
                    <div className="moneylines">
                        <h1>{gameArray.Odds[0].MoneyLineAway}</h1>
                        <h1>{gameArray.Odds[0].MoneyLineHome}</h1>
                    </div>
                </div>
            )
        })
        
    }

    render() {
        return(
            <marquee height="225px" className="marquee-container">
                    {this.loadAllGames()}
            </marquee>
        )
    }
}
export default Odds
  