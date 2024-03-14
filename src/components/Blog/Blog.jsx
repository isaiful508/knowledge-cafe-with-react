import { FaRegBookmark } from "react-icons/fa";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark }) => {

    const { title, cover, reading_times, posted_date, author, author_img, hashtags } = blog;

    return (
        <div className='mb-20'>

            <img className='w-full mb-8' src={cover} />

            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

               <div className="flex items-center">

               <span className="text-2xl" > 
               {reading_times} 
               mins read</span>

                <button onClick={handleAddToBookmark} 
                className="ml-4 text-2xl"><FaRegBookmark></FaRegBookmark></button>

               </div>
                <div>

                </div>
            </div>

            <h2 className="text-4xl">{title}</h2>
        <p>

            {
                hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a> </span>)
            }
        </p>



        </div>
    );
};


Blog.prototypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;