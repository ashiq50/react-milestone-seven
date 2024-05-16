import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2>{title}</h2>
        </div>
    );
};

export default Bookmark;

Bookmark.propTypes ={
    bookmark: PropTypes.object
}