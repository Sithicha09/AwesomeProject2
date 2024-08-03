import React, { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
    const [count, setCount] = useState(0);

    const handleLike = () => {
        setCount(count + 1);
    };

    return (
        <View style={{marginTop: 10}}>
            <View style={{ justifyContent: 'center', padding: 10,flexDirection:'row' }}>
                <TouchableOpacity onPress={handleLike}>
                    <FontAwesome name='heart' size={50} color="red" />
                </TouchableOpacity>
                <Text style={{ marginLeft: 80, fontSize: 50 }}>{count}</Text>
            </View>
        </View>
    );
}