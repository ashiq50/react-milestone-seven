import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks, read}) => {
    console.log(bookmarks)
    return (
        <div className="w-1/3">
            <div>
                <h2 className="text-3xl">Reading Time: {read}</h2>
            </div>
            <h2>Bookmarks: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    read: PropTypes.number
}