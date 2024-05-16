import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmarks, markAsRead}) => {
    const {title, cover, author, image, posted_date, reading_time, hashtags} = blog;
    // console.log(blog)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure ><img className='rounded-xl' src={cover} alt={`cover picture of the title ${title}`} /></figure>
  <div className='flex justify-between items-center px-3'>
    {/* 1st */}
    <div className='flex'>
        <div>
            <img className='w-16 h-16 rounded-full text-center' src={image} alt="" />
        </div>
        <div className='ml-5'>
            <h3>{author}</h3>
            <p>{posted_date}</p>
        </div>
    </div>
    {/* 2nd */}
    <div className='flex items-center'>
        <p className='mr-5'>{reading_time} min read</p>
        <button
        onClick={()=> handleBookmarks(blog)}>
        <FaBookmark></FaBookmark>
        </button>
    </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='gap-5'>
        {
            hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
        }
    </p>
    <div className="card-actions">
      <button onClick={() =>markAsRead(reading_time)} className="border-b-2 border-b-green-300 text-green-300">Mark as read</button>
    </div>
  </div>
</div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object,
    handleBookmarks: PropTypes.func,
    markAsRead: PropTypes.func
  };