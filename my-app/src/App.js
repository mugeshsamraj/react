import './App.css';
import Book from './Component/Book';

function App() {
  const book = { 
  image : 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81YyraOaX1L._AC_UY218_.jpg',
   title : 'The Lord of the Rings FELLOWSHIP OF THE RING ',
   author : 'J. R. R. Tolkien ',
   price : '$79'
}
const secondBook = {
  image : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61YLlCTnWtL._AC_UY218_.jpg",
  title : "The Lord of the Rings: The Return of the King: Book 3",
  author : 'J. R. R. Tolkien ',
  price : '$90'
}
const thirdBook = {
  image : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71TMmQpJYDL._AC_UY218_.jpg",
  title : "The Lord of the Rings: The Return of the King: Book 2",
  author : 'J. R. R. Tolkien ',
  price : '$99'
}
const forthBook = {
  image : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91eMY-kzzXL._AC_UY218_.jpg",
  title : "Fall of Gondolin",
  author : 'J. R. R. Tolkien ',
  price : '$67'
}
const fifthBook = {
  image : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91eMY-kzzXL._AC_UY218_.jpg",
  title : "Fall of Gondolin",
  author : 'J. R. R. Tolkien ',
  price : '$67'
}
const sixthBook = {
  image : "https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91eMY-kzzXL._AC_UY218_.jpg",
  title : "Fall of Gondolin",
  author : 'J. R. R. Tolkien ',
  price : '$67'
}

  return (
    <section className='bookstore'>
      <div className='bookstore-title'>
        <h1>My Book Store</h1>
      </div>
      <div className='books'>
        <Book image={book.image} title={book.title}
        author={book.author} />
      </div>
      <div className='books'>
        <Book image={secondBook.image} title={secondBook.title}
        author={secondBook.author} />
      </div>
      <div className='books'>
        <Book image={thirdBook.image} title={thirdBook.title}
        author={thirdBook.author} />
      </div>
      <div className='books'>
        <Book image={book.image} title={book.title}
        author={book.author} />
      </div>
      <div className='books'>
        <Book image={secondBook.image} title={secondBook.title}
        author={secondBook.author} />
      </div>
      <div className='books'>
        <Book image={thirdBook.image} title={thirdBook.title}
        author={thirdBook.author} />
      </div>
    </section>
  );
}

export default App;
