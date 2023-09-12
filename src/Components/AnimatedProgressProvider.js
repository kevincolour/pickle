import React from "react";
import { Animate } from "react-move";

class AnimatedProgressProvider extends React.Component {

    state = {
        value: null
      };

  componentDidMount() {
    this.interval = window.setInterval(() => {
        this.setState({
            value: 0
        });
      }, 0);

    // this.setState({
    //   value:[0]
    // })
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: [0]
        })}
        enter={() => ({
          value: [0]
        })}
        update={() => {
            return ({
          value: [
            this.props.valueEnd
          ],
          events: {
            start: () => {
            },
            interrupt: () => {
            },
            end: () => {
              console.log("end")
            },
          },
          // value: [
          //   this.props.valueEnd
          // ],
          timing: { duration: this.props.duration, delay: 0, ease: this.props.easingFunction },
        })} }
      >
        {({ value }) => { 
          const roundedValue = Math.round(value);
 
            return this.props.children(roundedValue)}}
      </Animate>
    );
  }
}

export default AnimatedProgressProvider;
