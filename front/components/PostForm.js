import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { addPost } from '../reducers/post';

const PostForm = () => {
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (addPostDone) {
      setText('');
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    if (text.length > 0) {
      dispatch(addPost(text));
    }
  }, [text]);

  const imageInput = useRef();
  const onUploadImage = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType={'multipart/form-data'}
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder={'일상을 얘기해주세요'}
      />
      <div>
        <input type='file' multiple hidden ref={imageInput} />
        <Button onClick={onUploadImage}>이미지 업로드</Button>
        <Button type={'primary'} style={{ float: 'right' }} htmlType={'submit'}>
          등록
        </Button>
      </div>
      <div>
        {imagePaths.map((v) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={v} alt={v} style={{ width: '200px' }} />
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
