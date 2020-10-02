
import React, {useState, useEffect} from 'react'
import Axios from 'axios'

export default function Practics() {
    const [posts, setPosts] =useState([])
    const [search, setSearch] = useState("")
    const [currentPage, setCurrentPage] = useState(1) 
    const [postsPerPage] = useState(10)

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {setPosts(res.data)})
    },[])
    
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div>
            <div className="text-right my-3">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            </div>
            
            <table className="table my-3">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Title</th>
      <th scope="col">Body</th>
      <th scope="col">UserId</th>
    </tr>
  </thead>
  <tbody>
      {currentPosts.map(post => (
    <tr key={post.id}>
      <th scope="row">{post.id}</th>
      <td>{post.title}</td>
      <td>{post.body}</td>
      <td>{post.userId}</td>
    </tr>
    ))}
  </tbody>
</table> 
<div className="text-center">
    <button type="button" className="btn btn-primary mx-2" onClick={() => (
    setCurrentPage(currentPage + 1)
)}>Next Page</button>
            <button type="button" className="btn btn-primary" onClick={() => (
    setCurrentPage(currentPage - 1)
)}>Prev Page</button>
        </div>
    
        </div>

    )
}
