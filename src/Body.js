import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Homepage = () => {

    const { error, isPending, data} = useFetch('http://localhost:8000/blogs')
    
    return (
        <div className="homepage">
            <h1>Blogosphere Homepage</h1>
            { error && <div>{error}</div>}
            { isPending && <div>Waiting for data...</div>}
            { data && <BlogList blogs = {data}/>}
        </div>
     );
}
 
export default Homepage;