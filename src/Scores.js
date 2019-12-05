import React from 'react'

class Scores extends React.Component {
    
    
    renderScores = () => {
        console.log("scores", this.props.scores)
        return this.props.scores.map(score => {
        // scores.map(score => {

            return (
                <div className="marquee">
                    <div className="team-scores" >
                        <h1>{score.AwayTeam}</h1>
                        <h1>{score.AwayScore}</h1>
                    </div>
                    <div className="team-scores">
                        <h1>{score.HomeTeam}</h1>
                        <h1>{score.HomeScore}</h1>
                    </div>
                    <div className="time-left">
                        <h1>{score.Quarter}</h1>
                        {score.TimeRemaining === null ?
                        <h1>0:00</h1>
                        :
                        <h1>{score.TimeRemaining}</h1>
                        }
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