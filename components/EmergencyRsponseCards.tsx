import { poorGirl, vector1 } from "@/assets/assets";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TabBarIcon } from "./navigation/TabBarIcon";

const EmergencyResponseCards = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Emergency Response</Text>
      <ScrollView
        contentContainerStyle={{ paddingVertical: 20 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {[...Array(5)].map((_, i) => (
          <View key={i} style={styles.poorItem}>
            <Image
              source={poorGirl}
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
                  width: 40,
                  height: 30,
                  transform: [{ translateY: -29.5 }],
                }}
              />
              <Text style={styles.title}>Donate for Pakistan Flood</Text>
              <View style={styles.textBloc}>
                <TabBarIcon name={"people"} style={styles.iconStyle} />
                <Text style={styles.subtitle}>250 Donors</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default EmergencyResponseCards;

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
    marginTop: 5,
  },
  subtitle: {
    color: "#5A606D",
    fontSize: 15,
    fontWeight: "normal",
    marginTop: 5,
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

  emergencyImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  poorCardImage: {
    width: "100%",
    height: 150,
    marginBottom: -25,
  },
  poorCardDescription: {
    position: "relative",
    padding: 30,
    paddingLeft: 20,
    borderTopLeftRadius: 30,
    marginTop: -20,
    backgroundColor: "white",
  },
  poorItem: {
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 10,
  },
});
