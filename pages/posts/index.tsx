import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {usePosts} from "../../hooks/usePosts";

const PostsIndex: NextPage = () => {
    const { posts } = usePosts()
    return (
        <div>
            {
                posts.map((value, index) => <div key={index}>{value}</div>)
            }
        </div>
    )
}

export default PostsIndex;