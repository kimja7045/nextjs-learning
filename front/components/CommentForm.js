import React, { useCallback, useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import useInput from '../hooks/useInput';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../actions/post';

const CommentForm = ({ post }) => {
  const dispatch = useDispatch();

  const { addCommentDone, addCommentLoading } = useSelector(
    (state) => state.post
  );
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    // console.log(post.id, commentText);
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { postId: post.id, content: commentText, userId: id },
    });
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          rows={4}
        />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}
          type={'primary'}
          htmlType={'submit'}
          loading={addCommentLoading}
        >
          등록
        </Button>
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};
export default CommentForm;
