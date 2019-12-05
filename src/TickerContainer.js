import React from 'react'
import Ticker from './Ticker'
import Selector from './Selector'
import Clock from './Clock'
import ReactCountdownClock from 'react-countdown-clock'

class TickerContainer extends React.Component {

    state = {
        sportSelector: 'ALL',
        filteredSportID: 0,
        games: [],
        scores: [],
        fantasyStats: []
    }

    handleClick = (e) => {
        let selectedSport = e.target.text;
        switch (selectedSport) {
            case 'NCAAB':
                this.setState({
                    sportSelector: 'NCAAB',
                    filteredSportID: 3
                })
                break;
            case 'NFL':
                this.setState({
                    sportSelector: 'NFL',
                    filteredSportID: 2
                })
                break;
            case 'NBA':
                this.setState({
                    sportSelector: 'NBA',
                    filteredSportID: 1
                })
                break;
            case 'NHL':
                this.setState({
                    sportSelector: 'NHL',
                    filteredSportID: 4
                })
                break;
            case 'NCAAF':
                this.setState({
                    sportSelector: 'NCAAF',
                    filteredSportID: 5
                })
                break;
            case 'ALL':
                this.setState({
                    sportSelector: 'ALL',
                    filteredSportID: 0
                })
                break;
        
            default:
                break;
        }
    }
    componentDidMount() {
        this.fetchOdds()
        this.fetchScores()
        this.fetchFantasyStats()
    }

    fetchOdds() {
        // fetch('http://localhost:3000/matches')
        fetch('https://api.sportsdata.io/v3/nfl/odds/json/AlternateMarketGameOddsByWeek/2019REG/14?key=03acceecb3524161ac420bb653e6803c')
        .then(resp => resp.json())
        .then(games => {
            this.setState({
                games: games
            })
        })
    }

    fetchScores() {
        fetch("https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2019/13?key=03acceecb3524161ac420bb653e6803c")
        .then(resp => resp.json())
        .then(scores => {
            this.setState({
                scores: scores
            })
        })
    }

    fetchFantasyStats() {
        fetch("https://api.sportsdata.io/v3/nfl/stats/json/DailyFantasyPoints/2019-DEC-3?key=03acceecb3524161ac420bb653e6803c")
        .then(resp => resp.json())
        .then(fantasyStats => {
            this.setState({
                fantasyStats: fantasyStats
            })
        })
    }
    

    
 
    render(){ 
        
        // let filteredGames;
        // if (this.state.filteredSportID !== 0 )
        //     filteredGames = this.state.games.filter(g =>
        //     g.Sport === this.state.filteredSportID)
        // else (filteredGames = this.state.games) 
        return (
            <React.Fragment>
                <div className="ticker-container">
                    <Selector className="selector" handleClick={this.handleClick} />
                    <h2 className="current-sport"> 
                        <div className="current-sport-text">
                            Sport: 
                        </div>
                            {this.state.sportSelector}
                    </h2>
                </div>
                
                <div className="countdown">
                    <Clock className="clock" />
                    {/* <h2 className="refresh"> Auto-Refresh In:</h2> */}
                    {/* <ReactCountdownClock seconds={720} color="#531092" alpha={0.9} size={75} onComplete={this.fetchOdds} /> */}
                </div>
                    <Ticker className="ticker" 
                        filteredSportID={this.state.filteredSportID} 
                        games={this.state.games} 
                        scores={this.state.scores} 
                        fantasyStats={this.state.fantasyStats} 
                        key={this.state.games.ID} 
                        feedChoice={this.props.feedChoice} 
                        />
            </React.Fragment>
        )}
        
}



export default TickerContainer