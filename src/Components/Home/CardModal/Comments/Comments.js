import React, { useState, useContext } from 'react';
import { UseContext } from '../../../../Hooks/useStorage';
import styles from './Comments.module.css';
import { ReactComponent as Enviar } from '../../../../Assets/enviar.svg';
import Input from '../../../UI/Input/Input';

const Comments = ({ comments, photo }) => {
  const [comment, setComment] = useState();
  const { commentPost } = useContext(UseContext);

  const loggedUser = window.localStorage.getItem('name');

  function addComent(evt) {
    setComment({ commentAuthor: loggedUser, commentContent: evt.target.value });
  }

  function sendComment() {
    let bodyToFetchComment = {};

    if (photo.comments === undefined) {
      bodyToFetchComment = { ...photo, comments: [comment] };
    } else {
      bodyToFetchComment = { ...photo, comments: [...photo.comments, comment] };
    }

    commentPost(photo.id, bodyToFetchComment);
  }

  return (
    <>
      <div className={styles.commentsContainer}>
        {comments && (
          <ul>
            {comments.map((item) => {
              return (
                <li key={Math.random()} className={styles.comment}>
                  <p className={styles.commentAuthor}>{item.commentAuthor}:</p> {item.commentContent}{' '}
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {localStorage.getItem('token') && (
        <div className={styles.addCommentsContainer}>
          <Input type={'text'} onBlur={addComent} placeholder={'Comente...'}></Input>
          <button className={styles.sendComment} onClick={sendComment}>
            <Enviar></Enviar>
          </button>
        </div>
      )}
    </>
  );
};

export default Comments;
