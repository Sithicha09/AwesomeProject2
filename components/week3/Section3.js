import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Section3() {
    return (
        <View style = {{ marginHorizontal: 20 ,flexDirection: 'row', marginVertical: 10}}>
            <View style={{  }}>
                <View style={{ backgroundColor: 'orange', width: 50, height: 50, borderRadius: 50 / 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ color: 'white', fontSize: 25 }}> 9.5 </Text>
                </View>
            </View>
            <View>
                <Text style={{ color: 'orange', fontSize: 30 }}>Excellent</Text>
                <Text>See 801 reviews</Text>
            </View>

        </View>
    );
}