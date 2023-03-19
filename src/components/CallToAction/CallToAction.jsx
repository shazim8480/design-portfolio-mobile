import { StyleSheet, View } from "react-native";
import React from "react";
//components
import Text from "../Text/Text";
import Button from "../Button/Button";
// theme
import { colors } from "../../theme/colors";
import { metrics } from "../../theme/metrics";

const CallToAction = () => {
  return (
    <View style={styles.CTACard}>
      <Text preset="headingSWhite" centered>
        Book a call with me
      </Text>
      <Text
        preset="bodyWhite"
        customStyles={{
          paddingHorizontal: metrics.spacing.m,
          marginVertical: metrics.spacing.m,
        }}
        centered
      >
        I’d love to have a chat to see how I can help you. The best first step
        is for us to discuss your project during a free consultation. Then we
        can move forward from there.
      </Text>
      <Button
        customStyles={{ alignSelf: "center" }}
        preset="secondary"
        title="Free Consultation"
      />
    </View>
  );
};

export default CallToAction;

const styles = StyleSheet.create({
  CTACard: {
    marginTop: metrics.spacing.L,
    paddingHorizontal: metrics.spacing.m,
    paddingVertical: metrics.spacing.XL,
    borderRadius: metrics.radius.m,
    backgroundColor: colors.black,
  },
});
