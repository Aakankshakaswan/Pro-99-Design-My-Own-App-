import React from  "react";
import {Text, View, Image, TouchableOpacity} from 'react-native';

export default class HomeScreen extends  React.Component {
    constructor() {
        super();
        this.state = {}
    }
    
    componentDidMount () {
        console.log("You are in homescreen")
    }
    
    render() {
        return(
            <View>
                <Text>
                    HomeScreen
                </Text>
            </View>
        )
    }
}





