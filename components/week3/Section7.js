import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section7() {
    return (
        <View style = {{marginHorizontal: 20}}>

            <View>

                <Text style = {{fontSize : 33}}>Room Type</Text>

            </View>

            <View style={{flexDirection: 'row'}}>

                <View>
                    <Image style={{ width: 100, height: 140, borderRadius: 10}} source={require('../../assets/week3/room-8.jpg')}/>
                </View>

                <View>
                    <Text style = {{fontSize : 25}}>Standard Twin Room</Text>
                    <Text style = {{fontSize : 25 , color : 'orange' , paddingTop : 60}}>$399.99</Text>
                    <Text style = {{fontSize : 20 , color : 'blue'}}>Hurry Up! This is your last room!</Text>
                </View>

            </View>

        </View>
    );
}