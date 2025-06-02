
import { Ionicons } from "@expo/vector-icons";
import { Loader } from "components/Loader";
import { COLORS } from "constants/theme";
import { api } from "convex/_generated/api";
import { useQuery } from "convex/react";
import { Link } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "styles/notification.styles";
import { Image } from "expo-image";

export default function Notifications() {
  const notifications = useQuery(api.notifications.getNotifications);

  if (notifications === undefined) return <Loader />;
  if (notifications.length === 0) return <NoNotificationsFound />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem notification={item} />}
        keyExtractor={(item) => item._id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

function NotificationItem({ notification }: any) {
  return (
    <View style={styles.notificationItem}>
      <View style={styles.notificationContent}>
      <Link href={`/notifications`} asChild>	
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            source={notification.sender.image}
            style={styles.avatar}
            contentFit="cover"
            transition={200}
            />
            <View style = {styles.iconBadge}>
              {notification.type === "like" ? (
                <Ionicons name="heart" size={14} color={COLORS.primary} />
              ) : notification.type === "follow" ? (
                <Ionicons name="person-add" size={14} color="#8B5CF6" />
              ) : (
                <Ionicons name="chatbubble-ellipses" size={14} color= "#3B82F6" />
              )}
       </View>
      </TouchableOpacity>
     </Link>
    </View>
  </View>
  );
}

function NoNotificationsFound() {
  return (
    <View style={[styles.container, styles.centered]}>
      <Ionicons name="notifications-outline" size={48} color={COLORS.primary} />
      <Text style={{ fontSize: 20, color: COLORS.white }}>No notifications yet</Text>
    </View>
  );
}
