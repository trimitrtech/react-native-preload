import React, { Component } from "react";
import { Animated, Easing } from "react-native";


export default class Skeleton extends Component {

  constructor(props) {
    super(props);    
    this.state = {
    }
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount () {
    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0);
    console.log(this.animatedValue);
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true
      }
    ).start(() => this.animate())
  }


  render() {  
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    })    

    return (
      <Animated.View style={{
        opacity,
        width: this.props.Width,
        height: this.props.Height,
        backgroundColor: '#f2f2f2',
        borderRadius: this.props.BorderRadius,   
      }} />    
    )
  }
}