import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  //bookmark state
const [bookmarks, setBookmarks] = useState([]);
//reading time state
const [readingTime, setReadingTime] = useState(0);

const handleMarkRead = (time, id) =>{
 
  setReadingTime(readingTime+time);

  //remove the read the bookmark
// console.log('remov boomark', id)
const remainningsBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
setBookmarks(remainningsBookmarks)

}




const handleAddToBookmark = (blog) =>{
  const newBookmarks = [...bookmarks,  blog]
  setBookmarks(newBookmarks);
}

  return (
    <>
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>

      <Blogs handleMarkRead={handleMarkRead} handleAddToBookmark={handleAddToBookmark}></Blogs>

  <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
      
     
    </>
  )
}

export default App
