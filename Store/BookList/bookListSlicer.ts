import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import fetchBooks from '../../Services/getBooks';

interface BookList {
    bookList: any,
    selectedBook: any,
    loading: boolean,
    error: string
}


const initialState: BookList = {
    bookList: [],
    selectedBook: {},
    loading: false,
    error: ""
}
export const fetchBookList = createAsyncThunk('books/fetchBookList',()=> fetchBooks())
const BooksSlice = createSlice({
  name: 'bookList',
  initialState: initialState,
  reducers: {
    setBookList: (state, action) => {
        state.selectedBook = action.payload; // Update the bookList in the state
      },
  },
  extraReducers: builder => {
    builder.addCase(fetchBookList.pending, (state,action) => {
        state.loading = true;
    });
    builder.addCase(fetchBookList.fulfilled, (state,action) => {
        state.loading = false;
        state.bookList = action.payload.data;
    });
    builder.addCase(fetchBookList.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
    })
  }
});

export const { setBookList } = BooksSlice.actions;
export const BookSlicer = BooksSlice.reducer;
