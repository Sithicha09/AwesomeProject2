import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const onPressButton = () =>
{
    console.log ("Button")
}
export default function Section8() {
    return (
        <View style={{ flexDirection: 'row', justifyContent:'space-between', borderTopWidth: 1, borderBottomWidth: 1, marginHorizontal: 20, paddingVertical: 10 }}>
            <View style ={{flexDirection : 'column'}}>
                <Text style={{ fontSize: 25 }}>Price</Text>
                <Text style={{ fontSize: 25, color: 'orange'}}>$399.99</Text>
                <Text style={{ fontSize: 20, color: 'blue' }}>AVG/Night</Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
                <Button title="Book Now" onPress={onPressButton}>
                </Button>
            </View>
        </View>
    );
}