import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Layout from '../Common/Layout';
import BookItem from '../Components/BookItem';
import {fetchBookList} from '../Store/BookList/bookListSlicer';
import {useDispatch, useSelector} from 'react-redux';
const Main = () => {
  const dispatch = useDispatch();
  const bookLists = useSelector(state => state.bookList.bookList);
  const loading = useSelector(state => state.bookList.loading);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = bookLists.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  useEffect(() => {
    dispatch(fetchBookList());
  }, []);
  return (
    <>
      <Layout />
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image source={require('../Assets/Icons/Icon.png')} />
          <View style={styles.inputCon}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder="Search..."
              onChangeText={e => setSearchQuery(e)}
            />
          </View>
        </View>
        {searchQuery == '' &&
          (!loading ? (
            <FlatList
              data={bookLists}
              renderItem={({item, index}) => (
                <BookItem key={index} item={item} />
              )}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.flatListContainer}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          ) : (
            <View style={styles.bookListLoader}>
              <ActivityIndicator size="large" color="#004D6D" />
            </View>
          ))}
        {searchQuery && (
          <FlatList
            data={filteredPosts}
            keyExtractor={post => post.id}
            renderItem={({item, index}) => <BookItem key={index} item={item} />}
            contentContainerStyle={styles.flatListContainer}
          />
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 10,
    borderRadius: 22.5,
    marginBottom: 20,
  },
  inputCon: {
    width: '100%',
    paddingHorizontal: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    padding: 10,
    marginRight: 20,
    borderColor: '#EFEFEF',
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '400',
  },
  flatListContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  bookListLoader: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
