import { useState, useEffect } from 'react';
import BlogList from './BlogList';



const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const [name, setName] = useState('mario');

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setBlogs(data)
      setIsPending(false)
    })

  }, [name]);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs = { blogs } title="All Blogs" /> }
      </div>
  );
}

export default Home;