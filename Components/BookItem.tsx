import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import StarRating from "react-native-star-rating";
import { useNavigation } from "@react-navigation/native";
import Detail from "./Detail";
import {useDispatch} from "react-redux"
import { setBookList } from "../Store/BookList/bookListSlicer";
const BookItem = ({item}: any) => {
  const {navigate} = useNavigation<any>()
  const dispatch = useDispatch()

  const handleItem = () => {
    dispatch(setBookList(item))
    navigate(Detail)
  }
  return (
    <TouchableOpacity onPress={() => handleItem()} style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.itemImage}
        source={{uri: item?.imageLink}}
      />
      <View style={styles.itemIconContainer}>
        <Image
          resizeMode="cover"
          style={styles.itemIcon}
          source={require("../Assets/Icons/Frame3.png")}
        />
      </View>
      <View>
        <Text style={styles.itemTitle}>{item?.title}</Text>
        <View style={styles.starRating}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={item?.rating}
            containerStyle={{
              marginVertical: 5,
              width: "50%",
            }}
            starSize={18}
            fullStarColor={"#DF9401"}
          />
          <Text style={styles.starRatingText}>({item?.reviews})</Text>
        </View>
        <Text style={styles.itemPrice}>${item?.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  container: {
    width: 160,
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10
  },
  itemImage: {
    width: "100%",
    height: 219,
    position: "relative",
    borderRadius: 10,
  },
  itemIconContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "flex-end",
    padding: 10,
  },
  itemIcon: {
    height: 25,
    width: 25,
  },
  itemTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
    alignItems: "center",
    color: "black",
    marginTop: 5,
  },
  starRating: {
    flexDirection: "row",
    alignItems: "center",
    width: 180
  },
  starRatingText: {
    marginLeft: 10,
  },
  itemPrice: {
    color: "black",
    fontSize: 12, 
    lineHeight: 18,
    fontWeight: "500"
  }
});
