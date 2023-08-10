import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./Header";

const Layout = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
