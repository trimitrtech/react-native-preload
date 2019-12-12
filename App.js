import React, { Component } from "react";
import { View, Dimensions } from "react-native";
import { Skeleton } from "react-native-preload";

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class App extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
        }
    }

   
    

    render() {

        return (
            <View style={{ height: SCREEN_HEIGHT / 1.2 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: SCREEN_WIDTH / 3, height: SCREEN_HEIGHT / 4, borderRadius: 15, marginVertical: 15, justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 5, borderColor: '#d8d8d8', borderWidth: 0.4 }}>
                        <View style={{ width: SCREEN_WIDTH / 5, height: SCREEN_HEIGHT / 5.8, backgroundColor: '#d8d8d8', borderRadius: 8, }} >
                            <Skeleton Width={70} Height={SCREEN_HEIGHT / 5.8} BorderRadius={8} />
                        </View>
                        <View>
                            <View style={{ width: SCREEN_WIDTH / 7, height: 15, backgroundColor: '#d8d8d8', borderRadius: 2 }}>
                                <Skeleton Width={Math.ceil(SCREEN_WIDTH / 7)} Height={15} BorderRadius={2} />
                            </View>
                            <View style={{ width: SCREEN_WIDTH / 7, height: 15, marginTop: 2, backgroundColor: '#d8d8d8', borderRadius: 2 }}>
                                <Skeleton Width={Math.ceil(SCREEN_WIDTH / 7)} Height={15} BorderRadius={2} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: SCREEN_WIDTH / 3, height: SCREEN_HEIGHT / 4, borderRadius: 15, marginVertical: 15, justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 5, borderColor: '#d8d8d8', borderWidth: 0.4 }}>
                        <View style={{ width: SCREEN_WIDTH / 5, height: SCREEN_HEIGHT / 5.8, backgroundColor: '#d8d8d8', borderRadius: 8, }} >
                            <Skeleton Width={70} Height={SCREEN_HEIGHT / 5.8} BorderRadius={8} />
                        </View>
                        <View>
                            <View style={{ width: SCREEN_WIDTH / 7, height: 15, backgroundColor: '#d8d8d8', borderRadius: 2 }}>
                                <Skeleton Width={Math.ceil(SCREEN_WIDTH / 7)} Height={15} BorderRadius={2} />
                            </View>
                            <View style={{ width: SCREEN_WIDTH / 7, height: 15, marginTop: 2, backgroundColor: '#d8d8d8', borderRadius: 2 }}>
                                <Skeleton Width={Math.ceil(SCREEN_WIDTH / 7)} Height={15} BorderRadius={2} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: SCREEN_WIDTH / 3, height: SCREEN_HEIGHT / 4, borderRadius: 15, marginVertical: 15, justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 5, borderColor: '#d8d8d8', borderWidth: 0.4 }}>
                        <View style={{ width: SCREEN_WIDTH / 5, height: SCREEN_HEIGHT / 5.8, backgroundColor: '#d8d8d8', borderRadius: 8, }} >
                            <Skeleton Width={70} Height={SCREEN_HEIGHT / 5.8} BorderRadius={8} />
                        </View>
                        <View>
                            <View style={{ width: SCREEN_WIDTH / 7, height: 15, backgroundColor: '#d8d8d8', borderRadius: 2 }}>
                                <Skeleton Width={Math.ceil(SCREEN_WIDTH / 7)} Height={15} BorderRadius={2} />
                            </View>
                            <View style={{ width: SCREEN_WIDTH / 7, height: 15, marginTop: 2, backgroundColor: '#d8d8d8', borderRadius: 2 }}>
                                <Skeleton Width={Math.ceil(SCREEN_WIDTH / 7)} Height={15} BorderRadius={2} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}