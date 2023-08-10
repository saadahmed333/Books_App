import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../Common/Layout";
import BookItem from "../Components/BookItem";
import fetchBooks from "../Services/getBooks";

const Main = () => {
  const [bookLists, setBookLists] = useState([]);
  const handleGetBooksList = async () => {
    const { data, error }: any = await fetchBooks();
    if (error) {
      console.log(error, "error");
      return;
    }
    console.log(data, "data");
    setBookLists(data);
  };

  useEffect(() => {
    handleGetBooksList();
  }, []);
  return (
    <>
      <Layout />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={require("../Assets/Icons/Icon.png")} />
          <View style={styles.inputCon}>
            <TextInput
              style={styles.input}
              placeholderTextColor={"black"}
              placeholder="Search..."
            />
          </View>
        </View>
          <FlatList
            data={bookLists}
            renderItem={({ item }) => <BookItem item={item} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.flatListContainer}
          />
      </View>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 10,
    borderRadius: 22.5,
    marginBottom: 20,
  },
  inputCon: {
    width: "100%",
    paddingHorizontal: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    marginRight: 20,
    borderColor: "#EFEFEF",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
  },
  flatListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
