import React from 'react';
import { Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import MyIcon from './MyIcon';

export default function Section5() {
    return (
        <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'space-between', marginVertical: 10 }}>
            <MyIcon title="Wifi" name="wifi" size={30} color="orange" />
            <MyIcon title="Coffee" name="coffee" size={30} color="orange" />
            <MyIcon title="Bath" name="bath" size={30} color="orange" />
            <MyIcon title="Car" name="car" size={30} color="orange" />
            <MyIcon title="Paw" name="paw" size={30} color="orange" />

        </View>
    );
}