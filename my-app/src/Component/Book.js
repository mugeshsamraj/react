import React from 'react'

const Book = (props) => {
 
  return (
    <article className='book' >
      <div className='book_img-container'>
        <img src={props.image} alt={props.title} className='book-img' />
      </div>
      <h2 className='book-title'>{props.title}</h2>
      <h3 className='book-author'>{props.author}</h3>
    </article>
  )
}

export default Book