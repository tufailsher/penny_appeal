import EmergencyResponseCards from "@/components/EmergencyRsponseCards";
import EventCards from "@/components/EventCards";
import FeaturedCards from "@/components/FeaturedCards";
import PennyAppealComponent from "@/components/PennyAppealComponent";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <PennyAppealComponent />
      <EmergencyResponseCards />
      <FeaturedCards />
      <EventCards />
      <View>
        <TouchableOpacity style={styles.volunteerButton}>
          <Text style={{ color: "white" }}>Frequently Asked Questions</Text>
          <TabBarIcon name={"chevron-forward"} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
      <Text style={styles.withUs}>Volunteer with us</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  withUs: { color: "#EF7D00", textAlign: "center", paddingBottom: 40 },
  iconStyle: {
    fontSize: 20,
    color: "white",
  },
  volunteerButton: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    gap: 5,
    backgroundColor: "#FF9C27",
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: "center",
  },
});
