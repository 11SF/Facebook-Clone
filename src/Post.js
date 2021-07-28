import React,{ useState } from 'react'
function Post({ id, title, picture_link, deletePost }) {
    const [like,setLike] = useState(false)
    function like_btn() {
        setLike(!like);
    }
    return(
        <div className="Post">
            <button className="Delete_btn" onClick={() => deletePost(id)}>x</button>
            <div className="Post_title">{title}</div>
            <img className="Post_image" src={picture_link} alt="picture_post"/>
            <div className="Post_command">
               <button className="Post_btn" id={like ? "active" : "deactive" } onClick={like_btn} >👍 Like</button>    
               <button className="Post_btn">🖍 Comment</button>    
               <button className="Post_btn">🚀 Share</button>    
            </div>
        </div>
    );
}

export default Post;