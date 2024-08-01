import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section4() {
    return (
        <View style = {{borderTopWidth : 1 , borderBottomWidth : 1, marginHorizontal: 20 , paddingVertical : 10}}>
            <Text style={{fontSize : 25}}>Hotel Description</Text>

            <Text>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
        </View>
    );
}