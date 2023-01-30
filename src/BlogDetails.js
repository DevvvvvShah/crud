import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('http://localhost:8000/blogs/'+id);
    const clickCallback = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE'
        }).then(() => {
            navigate("/home")
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return ( 
        <div className="blog-details">
            {isPending && <div>Waiting for data...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>by { blog.author}</p>
                    <div>{ blog.body }</div>
                </article> 
            )}
            <button onClick={clickCallback}>Delete</button>
        </div>
     );
}
 
export default BlogDetails;