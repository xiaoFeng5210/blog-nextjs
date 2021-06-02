import {NextApiRequest, NextApiResponse} from "next";
import {getPosts} from "../../../lib/posts";

const Posts = async (request: NextApiRequest, response: NextApiResponse) => {
    const content = await getPosts();
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(content));
    response.end();
}

export default Posts;