import PropTypes from 'prop-types';

const Bookmark = ({bookmark, markAsRead}) => {
    const {title, id} = bookmark
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <div className='flex justify-between'>
                <h2>{title}</h2>
                <button onClick={()=>markAsRead(id)} className='btn btn-outline btn-error'>Delete</button>
                </div>
        </div>
    );
};

export default Bookmark;

Bookmark.propTypes ={
    bookmark: PropTypes.object,
    markAsRead: PropTypes.func
}