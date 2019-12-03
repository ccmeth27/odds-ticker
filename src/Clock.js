import React from "react"

class Clock extends React.Component {

    state = {
        time: new Date().toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
        }
    
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    tick = () => {
      this.setState({
        time: new Date().toLocaleString('en-US', {hour: '2-digit', minute: '2-digit', second: '2-digit'})
      });
    }

    render() {
      return (
        <div className="clock">
          <h2>{this.state.time}</h2>
        </div>
    )}
}

export default Clock;