
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

    const { title, cover, reading_times, posted_date, author, author_img, hashtags } = blog;

    return (
        <div className='container mx-auto'>

            <img className='w-[845px] h-[450px]' src={cover} />

            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-[60px] h-[60px] rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <span> {reading_times} mins read</span>
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