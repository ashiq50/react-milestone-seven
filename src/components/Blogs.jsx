import { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks, markAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    } ,[])
    return (
        <div className="w-2/3">
            <h2>Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto">
                {
                    blogs.map(blog => <Blog
                         key={blog.id}
                          blog={blog}
                          handleBookmarks={handleBookmarks}
                          markAsRead={markAsRead}
                          >

                          </Blog>)
                }
            </div>
        </div>
    );
};
Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    markAsRead: PropTypes.func
  };
export default Blogs;