import React from 'react';
import { Image, Text, View } from 'react-native';


export default function Card() {
    return (
        <View>

            {/* //ก้อน1 */}
            <View style={{flexDirection: 'row',marginLeft:10, paddingHorizontal:10}}>
                <Image style={{width:50 ,height:50,borderRadius:50/2}} source={require("../../assets/week3/profile-2.jpg")}/>
                <View style={{padding:10}}> 
                <Text style={{fontSize:20}}>Steve Garrett</Text>
                <Text style={{color:"grey"}}>5 hour ago | 100k view</Text>
                </View>
            </View>
            {/* ก้อน2 */}
            <View style={{flexDirection:'row',marginVertical:10}}>
                <Image style={{flex:1,resizeMode:'cover',aspectRatio:16/9}} source={require("../../assets/week3/trip-2.jpg")}/>
            </View> 
            {/* ก้อน3 */}
            <View style={{paddingHorizontal:10}}> 
                <Text style={{fontSize:20,}}>Overseas Adventure Travel In Nepal</Text>
                <Text style={{color:'grey'}}>
                    Andaz Tokyo Toranomon Hills is one of the newest luxury hotels in Tokyo. Located in one of the uprising areas of Tokyo
                </Text>
            </View>
        </View>    
    );
}