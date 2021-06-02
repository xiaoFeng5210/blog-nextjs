import fs, {promises as fsPromise} from 'fs'
import path from "path";
import matter from 'gray-matter'

export const getPosts = async () => {
    const txtDir = path.join(process.cwd(), 'testTxt')
    const fileNames = await fsPromise.readdir(txtDir);
    return fileNames.map(fileName => {
        const fullPath = path.join(txtDir, fileName);
        const text = fs.readFileSync(fullPath, 'utf-8');
        const result = matter(text);
        return result.content
    });
}