import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';

const PostCardContent = ({postData}) => { // =postContent
    // 첫 번째 게시글 #해시태그 #익스프레스
    // #첫번째#두번째
    // ##제로초

    return (
        <div>
            {postData.split(/(#[^\s#]+)/g).map((v, i)=>{
                if(v.match(/(#[^\s#]+)/)){
                    return <Link href={`/hashtag/${v.slice(1)}`} key={i}><a>{v}</a></Link>
                }
                return v
            })}
        </div>
    );
};

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
};

export default PostCardContent;
