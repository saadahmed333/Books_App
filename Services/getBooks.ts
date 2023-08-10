import axios from "axios";

const API_KEY = "#b0@6hX8YasCq6^unOaPw1tqR";

async function fetchBooks() {
  try {
    const response = await axios.get(
      "https://books-list-api.vercel.app/books",
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return error
  }
}

export default fetchBooks;
