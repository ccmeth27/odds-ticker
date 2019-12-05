import React from 'react'

class Scores extends React.Component {
    
    
    renderScores = () => {
        return this.props.scores.map(score => {

            return (
                <div className="marquee">
                    <div className="team-scores" >
                        <h1>{score.AwayTeam}</h1>
                        {score.AwayTeamScore === null ?
                        <h1>0</h1> :
                        <h1>{score.AwayTeamScore}</h1>}
                    </div>
                    <div className="team-scores">
                        <h1>{score.HomeTeam}</h1>
                        {score.HomeTeamScore === null ?
                        <h1>0</h1> :
                        <h1>{score.HomeTeamScore}</h1>}
                    </div>
                    <div className="time-left">
                        {score.Quarter === null ?
                        <h1>{score.Status}</h1> :
                        <h1>Qtr:{score.Quarter}</h1>}
                        {score.TimeRemainingMinutes === null && score.TimeRemainingSeconds === null ?
                        // <h1>{score.DateTime}</h1>
                        <h1>0:00</h1>: 
                        <h1>{score.TimeRemainingMinutes}:{score.TimeRemainingSeconds}</h1>}
                    </div>
                </div>
            )
        })
    }

   
    render() {
        return(
            <marquee height="225px" hspace="0px" className="marquee-container" >
                {this.renderScores()}
            </marquee>
        )
    }
}
export default Scores