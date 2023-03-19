import { StyleSheet, Image, View } from "react-native";
import React from "react";

import { metrics } from "../../theme/metrics";
import { images } from "../../theme/images";

import Button from "../Button/Button";

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.menu} source={images.menu} />
      <Button title="Free Consultation" />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: metrics.spacing.L,
  },
  menu: {
    resizeMode: "contain",
  },
});
