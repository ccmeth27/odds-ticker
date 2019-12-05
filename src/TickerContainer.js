import React from 'react'
import Ticker from './Ticker'
import Selector from './Selector'
import Clock from './Clock'
import ReactCountdownClock from 'react-countdown-clock'


class TickerContainer extends React.Component {
    

    state = {
        sportSelector: 'nfl',
        sportDisplay: 'NFL',
        filteredSportID: 0,
        games: [],
        scores: [],
        fantasyStats: [],
        date: new Date
    }
    // setDate = () => {
    //     let tempDate = new Date()
    //     let date = tempDate.getFullYear() + '/' + (tempDate.getMonth()+1) + '/' + tempDate.getDate();
    //     this.setState({
    //         date: date
    //     })
    // }

    handleClick = (e) => {
        let selectedSport = e.target.text;
        switch (selectedSport) {
            case 'NCAAB':
                this.setState({
                    sportSelector: 'cbb',
                    sportDisplay: 'NCAAB',
                    filteredSportID: 3
                })
                break;
            case 'NFL':
                this.setState({
                    sportSelector: 'nfl',
                    sportDisplay: 'NFL',
                    filteredSportID: 2
                })
                break;
            case 'NBA':
                this.setState({
                    sportSelector: 'nba',
                    sportDisplay: 'NBA',
                    filteredSportID: 1
                })
                break;
            case 'NHL':
                this.setState({
                    sportSelector: 'nhl',
                    sportDisplay: 'NHL',
                    filteredSportID: 4
                })
                break;
            case 'NCAAF':
                this.setState({
                    sportSelector: 'cfb',
                    sportDisplay: 'NCAAF',
                    filteredSportID: 5
                })
                break;
        
            default:
                break;
        }
    }



    componentDidMount() {
        this.fetchScores()
        this.fetchOdds()
        this.fetchFantasyStats()
    }

    fetchOdds() {
        const nflKey = '03acceecb3524161ac420bb653e6803c'
        const nbaKey = '9b9d34020bc54c4db706f76c9cba3a6f'
        // fetch('http://localhost:3000/matches')
        fetch(`https://api.sportsdata.io/v3/nfl/odds/json/AlternateMarketGameOddsByWeek/2019REG/14?key=03acceecb3524161ac420bb653e6803c`)
        .then(resp => resp.json())
        .then(games => {
            this.setState({
                games: games
            })
        })
    }
    
    fetchScores() {
        const nflKey = '03acceecb3524161ac420bb653e6803c'
        const nbaKey = '9b9d34020bc54c4db706f76c9cba3a6f'
        // let tempDate = new Date()
        // let date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate();
        // fetch("https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2019/13?key=03acceecb3524161ac420bb653e6803c")
        fetch(`https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/2019-12-4?key=9b9d34020bc54c4db706f76c9cba3a6f`)
        .then(resp => resp.json())
        .then(scores => {
            this.setState({
                scores: scores
            })
        })
    }

    fetchFantasyStats() {
        const nflKey = '03acceecb3524161ac420bb653e6803c'
        fetch(`https://api.sportsdata.io/v3/nfl/stats/json/DailyFantasyPoints/2019-DEC-3?key=03acceecb3524161ac420bb653e6803c`)
        .then(resp => resp.json())
        .then(fantasyStats => {
            this.setState({
                fantasyStats: fantasyStats
            })
        })
    }
    

    
 
    render(){ 
        
        // let filteredScores;
        // if (this.state.sportSelector !== 0 )
        //     filteredScores = this.state.scores.filter(g =>
        //     g.Sport === this.state.sportSelector)
        // else (filteredScores = this.state.scores) 
        return (
            <React.Fragment>
                <div className="ticker-container">
                    
                    <Selector className="selector" handleClick={this.handleClick} />
                    
                    <h2 className="current-sport"> 
                        <div className="current-sport-text">
                            Sport: 
                        </div>
                            {this.state.sportDisplay}
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