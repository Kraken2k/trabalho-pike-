    import { Image,Pressable, Text, TouchableOpacity, View,  } from "react-native";
    import {styles} from "../../styles/auth.styles";
    import React from "react";
    import { Link } from "expo-router";
    import { useAuth } from "@clerk/clerk-expo";
    
    export default function Index() {
      const { signOut } = useAuth();
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => signOut()}>
            <Text style={{color: "white"}}>signOut</Text>
          </TouchableOpacity>
        </View>
      );
    }