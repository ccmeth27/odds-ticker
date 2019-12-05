import React from 'react'
import Odds from './Odds'
import Scores from './Scores'
import Fantasy from './Fantasy'
import HomeTicker from './HomeTicker'
import Notfound from './Notfound'
import { Route, Switch, Redirect } from 'react-router-dom'




class Ticker extends React.Component {

    renderOdds = () => {
        return <Odds key={this.props.games.ID} games={this.props.games} /> 
    }
    
    renderScores = () => {
        return <Scores key={this.props.scores.GameKey} scores={this.props.scores}/>
    }

    renderFantasy = () => {
        return <Fantasy key={this.props.fantasyStats.PlayerID} fantasyStats={this.props.fantasyStats}/>
    }    
    
    render () {
        return (
            <div>
                <Switch>
                    <Route path="/odds" render={this.renderOdds} />
                    <Route path="/live-scores" render={this.renderScores}/>
                    <Route path="/fantasy" render={this.renderFantasy} />
                    <Route exact path="/" component={HomeTicker} />
                    <Route component={Notfound} />
                </Switch>
            </div>
                )
            }
        }
        
export default Ticker;