import {View, Text, Image} from "react-native";
import {styles} from "../styles/feed.styles";
import {formatDistanceToNow} from "date-fns";

interface Comment {
    content: string;
    _creatorTime:number;
    user:{
        fullname: string;
        image: string;
    };
}

export default function Comment({comment}: {comment: Comment}){
    return(
        <View style={styles.commentContainer}>
            <Image source={{uri:comment.user.image}} style={styles.commentAvatar}/>
            <View style={styles.commentContent}>
                <Text style={styles.commentUsername}>{comment.user.fullname}</Text>
                <Text style={styles.commentText}>{comment.content}</Text>
                <Text style={styles.commentTime}>
                    {formatDistanceToNow(comment._creatorTime, {addSuffix: true})}
                </Text>
            </View>
        </View>
    );
}