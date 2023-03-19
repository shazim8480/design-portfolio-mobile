import { StyleSheet, View, Image } from "react-native";
import Text from "../Text/Text";
import React from "react";

const SkillCard = ({
  height,
  backgroundColor,
  img,
  skillName,
  marginTop,
  customStyles,
}) => {
  return (
    <View
      style={[
        styles.card,
        {
          height: height,
          backgroundColor: backgroundColor,
          marginTop: marginTop,
        },
        customStyles,
      ]}
    >
      <Image source={img} style={styles.cardIcon} />
      <Text customStyles={styles.text} preset="skillTitle">
        {skillName}
      </Text>
    </View>
  );
};

export default SkillCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 24,
  },
  text: {
    alignSelf: "flex-start",
  },
  cardIcon: {
    alignSelf: "flex-end",
  },
});
