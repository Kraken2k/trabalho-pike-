import { Image,Pressable, Text, TouchableOpacity, View,  } from "react-native";

    import {styles} from "../../styles/auth.styles";
    import React from "react";
    import { Link } from "expo-router";
    
    export default function Index() {
      return (
        <View style={styles.container}>
            <Link href={"/notifications"}> Feed notifications screen </Link> 
        </View>
      );
    }