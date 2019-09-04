import React from 'react';
import dateFormat from '../utils/DateFormat'
import Voter from './Voter'

const CommentCard = (props) => {
    const { author, votes, created_at, comment_id, body } = props.comments
    return (
        <li key={comment_id}>
            <p>{body}</p>
            <p>Author: {author}</p>
            {(props.username === author ?
                <button className="delBtn" onClick={() => props.handleDelete(comment_id)}>Delete above comment</button> : '')}
            <Voter votes={votes} id={comment_id} type='comments' />
            {<p>Added: {dateFormat(created_at)}</p>}

        </li>

    );
};

export default CommentCard;