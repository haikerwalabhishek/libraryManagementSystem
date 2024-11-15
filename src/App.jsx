import {Route, Routes, HashRouter as Router} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import AddBook from "./pages/AddBook.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import Books from "./pages/Books.jsx";
import NotFound404 from "./pages/NotFound404.jsx";
import MobileNavbar from "./components/MobileNavbar.jsx";
import { Provider } from 'react-redux';
import {store} from "./redux/store.js"



const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar/>
        <MobileNavbar/>
        <Routes>
          <Route path="/libraryManagementSystem" element={<Home/>}/>
          <Route path="/browseBooks" element={<Books/>}/>
          <Route path="/addBook" element={<AddBook/>}/>
          <Route path="/bookdetails/:id" element={<BookDetails/>}/>
          <Route path="/404" element={<NotFound404 />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App