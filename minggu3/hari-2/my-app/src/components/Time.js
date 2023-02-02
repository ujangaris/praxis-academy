import React from "react"

class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0,
    }
  }
  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }))
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return <div>Seconds: {this.state.seconds}</div>
  }
}

export default Time
