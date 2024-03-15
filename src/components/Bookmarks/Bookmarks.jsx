import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300">
            <div className='text-center'>
                <h4 className="text-4xl">Reading Time : {readingTime}</h4>
            </div>


            <h2 className="text-3xl text-center">Bookmarks Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark bookmark={bookmark} key={bookmark.idx}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;

