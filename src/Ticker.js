import React from 'react'
import Odds from './Odds'



class Ticker extends React.Component {

    render(){
        return (
            <div className="scroll-box">
                <Odds games={this.props.games} filteredStateID={this.props.filteredStateID}/>
            </div>
    );
}
}

export default Ticker
    // shouldComponentUpdate(nextProps, nextState){
    //   console.log(nextProps.value)
    //   return Math.abs(nextProps.value - this.props.value) > 5
    // }
    
    //   componentDidUpdate(prevProps, prevState){
    //     if (prevProps.value > this.props.value){
    //       this.setState({
    //         color: "red"
    //       })
    //     } else if (prevProps.value < this.props.value){
    //       this.setState({
    //         color: "green"
    //       })
    //     }
    //   }