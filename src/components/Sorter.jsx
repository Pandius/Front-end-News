import React from 'react';
const Sorter = (props) => {
    return (
        <>
            <div>
                <select name="sort_by" onChange={props.setSortOrder}>
                    <option value="created_at">Sort by Date</option>
                    <option value="comment_count">Sort by Comments</option>
                    <option value="votes">Sort by Votes</option>
                    <option value="author">Sort by Author</option>
                    <option value="title">Sort by Title</option>


                </select>
            </div>
            <div>
                <select name="order" onChange={props.setSortOrder}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </>
    );
};

export default Sorter;