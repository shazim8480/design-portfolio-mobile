import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import { metrics } from "../theme/metrics";
import { images } from "../theme/images";
import { colors } from "../theme/colors";

//components
import Text from "../components/Text/Text";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import SkillCard from "../components/SkillCard/SkillCard";
import CallToAction from "../components/CallToAction/CallToAction";
import Button from "../components/Button/Button";

const Portfolio = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <Nav />
      <Text
        preset="headingL"
        customStyles={{ marginTop: metrics.spacing.xl }}
        centered
      >
        Design solutions made easy{" "}
      </Text>
      <Text
        preset="body"
        customStyles={{
          marginTop: metrics.spacing.m,
          marginBottom: metrics.spacing.xl,
          paddingHorizontal: 45 - metrics.spacing.m,
        }}
        centered
      >
        With over ten years of experience in various design disciplines, I’m
        your one-stop shop for your design needs.
      </Text>
      {/* SkillCards */}
      <SkillCard
        height={360}
        backgroundColor={colors.violet}
        img={images.graphicsDesign}
        skillName="Graphic Design"
      />
      <View style={styles.smallCardContainer}>
        <SkillCard
          height={180}
          customStyles={{ width: 160 }}
          backgroundColor={colors.yellow}
          img={images.UIUX}
          skillName="UI/UX"
        />
        <SkillCard
          height={180}
          customStyles={{ width: 160 }}
          backgroundColor={colors.pink}
          img={images.apps}
          skillName="Apps"
        />
      </View>
      <SkillCard
        height={180}
        marginTop={metrics.spacing.l}
        backgroundColor={colors.tomato}
        img={images.illustrations}
        skillName="Illustrations"
      />
      <SkillCard
        height={180}
        marginTop={metrics.spacing.l}
        backgroundColor={colors.green}
        img={images.photography}
        skillName="Photography"
      />
      <SkillCard
        height={180}
        marginTop={metrics.spacing.l}
        backgroundColor={colors.purple}
        img={images.motion}
        skillName="Motion Graphics"
      />
      <Text
        preset="headingS"
        customStyles={{
          marginTop: metrics.spacing.L,
          marginBottom: metrics.spacing.m,
          paddingHorizontal: metrics.spacing.m,
        }}
        centered
      >
        I’m Amy, and I’d love to work on your next project
      </Text>
      <Text
        preset="body"
        customStyles={{
          paddingHorizontal: metrics.spacing.s,
          marginBottom: metrics.spacing.m,
        }}
        centered
      >
        I love working with others to create beautiful design solutions. I’ve
        designed everything from brand illustrations to complete mobile apps.
        I’m also handy with a camera!
      </Text>
      <Button
        customStyles={{ alignSelf: "center" }}
        preset="secondary"
        title="Free Consultation"
      />
      <CallToAction />
      <Footer />
    </SafeAreaView>
  );
};

export default Portfolio;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: metrics.spacing.m,
  },
  smallCardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: metrics.spacing.l,
  },
});
