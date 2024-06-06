import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { eventPic, vector1 } from "@/assets/assets";

const EventCards = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Events</Text>
      <ScrollView
        contentContainerStyle={{ paddingRight: 20, paddingLeft: 10 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.poorItem}>
            <Image
              source={eventPic}
              style={styles.poorCardImage}
              resizeMode="cover"
            />
            <View style={styles.poorCardDescription}>
              <Image
                source={vector1}
                style={{
                  position: "absolute",
                  borderWidth: 1,
                  right: 0,
                  width: 42,
                  height: 30,
                  transform: [{ translateY: -29.5 }],
                }}
              />
              <Text style={styles.title}>
                Sh. Assim Al Hakeem Tour - Feb 17th - Edmonton
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default EventCards;

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
  },
  textBloc: { display: "flex", flexDirection: "row", gap: 5 },
  iconStyle: {
    color: "grey",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#5A606D",
    fontSize: 15,
    fontWeight: "normal",
  },
  section: {
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#5A606D",
  },

  poorCardImage: {
    width: "100%",
    height: 200,
    marginBottom: -25,
  },
  poorCardDescription: {
    position: "relative",
    // backgroundColor: "red",
    padding: 15,
    paddingLeft: 20,
    borderTopLeftRadius: 30,
    marginTop: -20,
    backgroundColor: "white",
  },
  poorItem: {
    marginTop: 10,
    maxWidth: 300,
    width: "100%",
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 10,
  },
});
