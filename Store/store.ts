import { configureStore } from '@reduxjs/toolkit';
import { BookSlicer } from './BookList/bookListSlicer';

const store = configureStore({
  reducer: {
    bookList: BookSlicer
  },
});

export default store;