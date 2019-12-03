import React from 'react'
import Ticker from './Ticker'
import Selector from './Selector'
import Clock from './Clock'
import ReactCountdownClock from "react-countdown-clock"

class TickerContainer extends React.Component {

    state = {
        sportSelector: "ALL",
        filteredSportID: 0,
        odds: "Pre-game",
        games: [],

    }

    handleClick = (e) => {
        let selectedSport = e.target.text;
        switch (selectedSport) {
            case 'NCAAB':
                this.setState({
                    sportSelector: 'NCAAB',
                    filteredSportID: 3,
                    odds: [this.state.odds],
                    games: [...this.state.games]
                })
                break;
            case 'NFL':
                this.setState({
                    sportSelector: 'NFL',
                    filteredSportID: 2,
                    odds: [this.state.odds],
                    games: [...this.state.games]
                })
                break;
            case 'NBA':
                this.setState({
                    sportSelector: 'NBA',
                    filteredSportID: 1,
                    odds: [this.state.odds],
                    games: [...this.state.games]
                })
                break;
            case 'NHL':
                this.setState({
                    sportSelector: 'NHL',
                    filteredSportID: 4,
                    odds: [this.state.odds],
                    games: [...this.state.games]
                })
                break;
            case 'NCAAF':
                this.setState({
                    sportSelector: 'NCAAF',
                    filteredSportID: 5,
                    odds: [this.state.odds],
                    games: [...this.state.games]
                })
                break;
            case 'ALL':
                this.setState({
                    sportSelector: 'ALL',
                    filteredSportID: 0,
                    odds: [this.state.odds],
                    games: [...this.state.games]
                })
                break;
        
            default:
                break;
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/matches')
        .then(resp => resp.json())
        .then(games => {
            this.setState({
                sportSelector: [...this.state.sportSelector],
                filteredSportID: 0,
                odds: [...this.state.odds],
                games: games
            })
        })
    }
    

    
 
  render(){ 
      let filteredGames = {}
        if (this.state.filteredSportID !== 0 )
            filteredGames = this.state.games.filter(g =>
        g.Sport == this.state.filteredSportID)
        else (filteredGames = this.state.games) 
        console.log(filteredGames)
        return (
            <div>
                <div className="ticker-container">
                    <Selector className="selector" handleClick={this.handleClick} />
                    <h2 className="current-sport"> {this.state.sportSelector} Games</h2>
                </div>
                <br></br>
                <div className="countdown">
                    <Clock className="clock" />
                    <h2 className="refresh"> Refresh In:</h2>
                    <ReactCountdownClock seconds={30}
                                        color="#531092"
                                        alpha={0.9}
                                        size={75}
                                        onComplete={this.reRender} />
                </div>
                    <Ticker className="ticker" filteredSportID={this.state.filteredSportID} games={filteredGames} key={filteredGames.ID}/>
            </div>
        )}
    // )}
}



export default TickerContainer