import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import StarRating from 'react-native-star-rating';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
const Detail = () => {
    const {goBack} = useNavigation<any>()
  const book = useSelector(state => state.bookList.selectedBook);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goBack()}>
        <Icon name="arrowleft" size={30} color="#000" />
      </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.detailContainer}>
        <View
          style={styles.shadow}>
          <Image
            width="100%"
            height={400}
            style={{borderRadius: 20}}
            source={{
              uri: book.imageLink,
            }}
          />
          <View style={styles.imageBottomMainContainer}>
            <View>
              <Text style={styles.imageBottomTitle}>Rating</Text>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={book.rating}
                containerStyle={{
                  marginVertical: 5,
                }}
                starSize={12}
                fullStarColor={'#DF9401'}
              />
            </View>
            <View>
              <Text style={styles.imageBottomTitle}>Reviews</Text>
              <Text style={styles.imageBottomSubTitle}>({book.reviews})</Text>
            </View>
            <View>
              <Text style={styles.imageBottomTitle}>Price</Text>
              <Text style={styles.imageBottomSubTitle}>${book.price}</Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.bookName}>{book.title}</Text>
          <View style={styles.detailView}>
            <Text style={styles.title}>Author: </Text>
            <Text style={styles.subTitle}>{book.author}</Text>
          </View>
          <View style={styles.detailView}>
            <Text style={styles.title}>Country: </Text>
            <Text style={styles.subTitle}>{book.country}</Text>
          </View>
          <View style={styles.detailView}>
            <Text style={styles.title}>Language: </Text>
            <Text style={styles.subTitle}>{book.language}</Text>
          </View>
          <View style={styles.detailView}>
            <Text style={styles.title}>Year: </Text>
            <Text style={styles.subTitle}>{book.year}</Text>
          </View>
          <View style={styles.detailView}>
            <Text style={styles.title}>Pages: </Text>
            <Text style={styles.subTitle}>{book.pages}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonView}>
            <Text style={styles.buttonTitle}>View details</Text>
            <Image source={require("../Assets/Icons/arrowIcon.png")} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
  </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
    flex: 1
  },
  detailContainer: {
    marginHorizontal: 10,
    marginTop: 20,
   
  },
  shadow: {
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    paddingVertical: 15
  },
  imageBottomMainContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  imageBottomTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: 'black',
  },
  imageBottomSubTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
  },
  bookName: {
    color: 'black',
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 33,
  },
  detailView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3
  },
  title: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 24,
  },
  subTitle: {
    color: 'black',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#004D6D",
    paddingVertical: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    flexDirection: 'row'
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    marginRight: 10
  }

});
