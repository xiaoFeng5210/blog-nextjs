import {NextPage} from "next";
import React, {useEffect, useState} from "react";
import axios from "axios";

const PostsIndex: NextPage = () => {
    const [posts, setPosts] = useState<string[]>([])
    useEffect(() => {
        axios.get('/api/v1/posts').then((response) => {
            setPosts(response.data);
        })
    }, [])
    return (
        <div>
            {
                posts.map((value, index) => <div key={index}>{value}</div>)
            }
        </div>
    )
}

export default PostsIndex;