import React from 'react'

const Book = () => {
  const image = 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81YyraOaX1L._AC_UY218_.jpg';
  const title = 'The Lord of the Rings FELLOWSHIP OF THE RING '
  const author = 'J. R. R. Tolkien '
  const price = '$99'
  return (
    <div className='book'>
    <img src={image} alt={title} />
    <h1>{title}</h1>
    <h2>{author}</h2>
    <h3>{price}</h3>
    </div>
  )
}

export default Book