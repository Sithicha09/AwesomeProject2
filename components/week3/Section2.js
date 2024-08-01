import React from 'react';
import { Image, Text, View } from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export default function Section2() {
    return (
        <View style={{ flex : 1 , marginTop : -30 , justifyContent : 'center', alignItems : 'center' , backgroundColor : 'green' ,marginHorizontal : 20, paddingVertical : 10 , borderRadius : 10}}>
            <Text style={{fontSize : 30}}>Hilton San Francisco</Text>
            <View style={{ flexDirection : 'row' ,marginVertical:5}}>
                <FontAwesome style = {{color : 'red'}} name='star'/>
                <FontAwesome style = {{color : 'red'}} name='star'/>
                <FontAwesome style = {{color : 'red'}} name='star'/>
                <FontAwesome style = {{color : 'red'}} name='star'/>
                <FontAwesome style = {{color : 'red'}} name='star-half-o'/>
            </View>
                <Text style={{textAlign : 'center', fontSize : 15}}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>    
        </View>
    );
}