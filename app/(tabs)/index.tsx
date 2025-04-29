    import { Image,Pressable, ScrollView, Text, TouchableOpacity, View,  } from "react-native";
    import {styles} from "../../styles/feed.styles";
    import React from "react";
    import { Link } from "expo-router";
    import { useAuth } from "@clerk/clerk-expo";
    import { Ionicons } from "@expo/vector-icons";
    import { COLORS } from "constants/theme";
    import Story from "componets/Story";
    import { STORIES } from "constants/mock-data";
    import { useQuery } from "convex/react";
    import { api } from "convex/_generated/api";
    import { Loader } from "componets/Loader";
import Post from "componets/Posts";

    const NoPostsFound = () => {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.background,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: COLORS.primary }}>No posts yet</Text>
        </View>
      );
    };
    
    export default function Index() {
      const { signOut } = useAuth();
    
      const posts = useQuery(api.posts.getFeedPosts)
    
      if(posts === undefined) return <Loader />
      if(posts.length === 0) return <NoPostsFound />
    
      return (
        <View style={styles.container}>
          
          {/*HEADER*/}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Trabalho PI</Text>
            <TouchableOpacity onPress={() =>signOut()}>
              <Ionicons name="log-out-outline" size={24} color= {COLORS.white}   />
            </TouchableOpacity>
          </View>

          <ScrollView 
          showsVerticalScrollIndicator={false}
           contentContainerStyle={{paddingBottom: 60}}
          >  

            {/*STORIES*/}

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.storiesContainer}
            >
              {STORIES.map((story) => (
                <Story key={story.id} story={story} />
              ))}
            </ScrollView>

              {posts.map((post) => (
                <Post key={post._id} post={post} />
              ))}

          </ScrollView>
        </View>
      );
    }

