import { StyleSheet, Image, View } from "react-native";
import React from "react";

import { metrics } from "../../theme/metrics";
import { images } from "../../theme/images";

import Button from "../Button/Button";

const Nav = () => {
  return (
    <View style={styles.navContainer}>
      <Image style={styles.menu} source={images.menu} />
      <Button title="Free Consultation" />
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: metrics.spacing.m,
  },
  menu: {
    resizeMode: "contain",
  },
});
