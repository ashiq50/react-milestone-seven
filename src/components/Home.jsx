import { useState } from "react";
import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";


const Home = () => {
    const [bookmarks, setBookmarks] = useState([])
    const [read, markAsReads] = useState(0)
    const handleBookmarks = blog =>{
        const newBookmark = [...bookmarks, blog]
        setBookmarks(newBookmark)
    }
    const markAsRead = minutes =>{
        const totalMins = read + minutes;
        markAsReads(totalMins);
    }
    return (
        <div className="md:flex max-w-7xl container mx-auto">
            <Blogs handleBookmarks={handleBookmarks} markAsRead={markAsRead}></Blogs>
            <Bookmarks bookmarks={bookmarks} read={read}></Bookmarks>
        </div>
    );
};

export default Home;