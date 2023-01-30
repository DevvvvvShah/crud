import Navbar from './navbar';
import Homepage from './Body';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import Create from './create';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="body">
        <Routes>
          <Route path = "/" element={<Homepage/>} />
          <Route path = "/home" element={<Homepage/>} />
          <Route path = "/create" element={<Create/>} />
          <Route path = "/blogs/:id" element={<BlogDetails/>}/>

        </Routes>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
