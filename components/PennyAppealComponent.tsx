import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CalculatorCards from "./CalculatorsCards";
import { HeaderVector } from "@/assets/assets";
import Wallet from "@/assets/images/Wallet";
import Bolt from "@/assets/images/Bolt";
import PieIcon from "@/assets/images/PieIcon";

const PennyAppealComponent = () => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={["#EF7D00", "#f79f4c", "transparent"]}
        style={styles.container}
      >
        <Image
          source={HeaderVector}
          style={{
            width: 170,
            height: 150,
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
          }}
          alt="test"
        />
        <View style={[styles.header, { zIndex: 5 }]}>
          <View style={{}}>
            <Text
              style={[
                styles.logoText,
                {
                  width: "100%",
                  fontWeight: "300",
                  marginBottom: -12,
                  fontSize: 26,
                },
              ]}
            >
              penny
            </Text>
            <Text
              style={[styles.logoText, { fontSize: 30, fontWeight: "900" }]}
            >
              appeal
            </Text>
          </View>

          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>
              <Text style={{ fontWeight: "900" }}>Salam,</Text> Ahmed
            </Text>
            <Ionicons name="search" size={35} color="white" />
          </View>
        </View>

        <View style={styles.goalContainer}>
          <View style={[styles.goalProgress, { marginBottom: 10 }]}>
            <Text style={styles.goalAmount}>$450</Text>
            <Text style={styles.goalAmount}>2024 donation goal</Text>
            <Text style={styles.goalAmount}>$1,000</Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 13,
              borderRadius: 8,
              backgroundColor: "orange",
              position: "relative",
            }}
          >
            <View
              style={{
                width: "50%",
                backgroundColor: "#3b9781",
                height: 13,
                borderRadius: 8,
                zIndex: 8,
              }}
            ></View>
            <View
              style={{
                width: "70%",
                backgroundColor: "white",
                height: 13,
                borderRadius: 8,
                position: "absolute",

                zIndex: 3,
              }}
            ></View>
          </View>
        </View>

        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.card}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={styles.cardTitle}>Round up</Text>
              <MaterialCommunityIcons
                name="wallet-plus-outline"
                size={30}
                color="#EF7D00"
              />
            </View>
            <Text style={styles.cardText}>$25 Round Up Last Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={styles.cardTitle}>Quick Donate</Text>

              <MaterialCommunityIcons
                name="lightning-bolt-outline"
                size={30}
                color="#EF7D00"
              />
              {/* <MaterialIcons name="offline-bolt" size={30} color="#EF7D00" style={{}}/> */}
            </View>
            <Text style={styles.cardText}>5 Days Since Last Donation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={styles.cardTitle}>Akhirah Portfolio</Text>
              <PieIcon />
            </View>
            <Text style={styles.cardText}>5 Campaigns Supported</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Text style={styles.cardTitle}>Auto Donate</Text>
              <Bolt />
            </View>
            <Text style={styles.cardText}>Next Donation: Palestine Relief</Text>
          </TouchableOpacity>
        </View>
        <CalculatorCards />
      </LinearGradient>
    </SafeAreaView>
    // </ExpoStatusBar>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 5,
    height: 100,
    marginBottom: 30,
  },
  logoText: {
    color: "#EF7D00",
  },
  greetingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    color: "white",
    fontSize: 24,
    marginRight: 8,
  },
  goalContainer: {
    marginTop: 20,
    backgroundColor: "transparent",
    paddingVertical: 20,
    borderRadius: 10,
  },
  goalText: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  goalProgress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
  },
  card: {
    width: "48%",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 14,
    marginBottom: 10,
    // alignItems: "",
    display: "flex",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  cardText: {
    fontSize: 14,
    color: "#00000080",
    marginTop: 5,
    textAlign: "left",
    fontWeight: "900",
  },
});

export default PennyAppealComponent;
