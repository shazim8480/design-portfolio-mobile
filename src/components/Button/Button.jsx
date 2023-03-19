import { StyleSheet, View, Pressable } from "react-native";
import Text from "../Text/Text";
import { Button as RNButton } from "react-native";
import { presets } from "./Button.preset";
import { colors } from "../../theme/colors";
import React from "react";

export default function Button({
  preset = "primary",
  customStyles,
  title,
  onPress,
}) {
  const btnStyle = presets[preset];

  return (
    <Pressable style={[btnStyle, customStyles]} onPress={onPress}>
      <Text preset="btnText">{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
