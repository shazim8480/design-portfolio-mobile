import { colors } from "../../theme/colors";
const fontSizes = {
  btn: 14,
  body: 16,
  headingS: 24,
  headingM: 33,
  headingL: 36,
};

export const presets = {
  body: {
    fontFamily: "body",
    fontSize: fontSizes.body,
    lineHeight: 28,
    color: colors.grey,
  },
  bodyWhite: {
    fontFamily: "body",
    fontSize: fontSizes.body,
    lineHeight: 28,
    color: colors.white,
  },
  headingS: {
    fontFamily: "heading",
    fontSize: fontSizes.headingS,
    lineHeight: 33,
    color: colors.black,
  },
  headingSWhite: {
    fontFamily: "heading",
    fontSize: fontSizes.headingS,
    lineHeight: 33,
    color: colors.white,
  },
  headingM: {
    fontFamily: "heading",
    fontSize: fontSizes.headingM,
  },
  headingL: {
    fontFamily: "heading",
    fontSize: fontSizes.headingL,
    lineHeight: 45,
  },
  btnText: {
    fontFamily: "heading",
    fontSize: fontSizes.btn,
    lineHeight: 28,
    color: colors.white,
  },
  skillTitle: {
    fontFamily: "heading",
    fontSize: fontSizes.headingS,
    color: colors.white,
    lineHeight: 30,
  },
};
