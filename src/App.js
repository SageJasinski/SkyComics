import { NavLink } from 'react-bootstrap';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component{

  render(){
    return(
      <>
        <div className='container-lg text-center'>
          <h1>Sky Comics</h1>
        </div>

        <div className='nav justify-content-center '>

            <div className='content'>
              <div className='style-link'></div>
              <NavLink>Latest chapter</NavLink>
            </div>

            <div className='content'>
              <div className='style-link'></div>
              <NavLink>Updates/News</NavLink>
            </div>

            <div className='content'>
              <div className='style-link'></div>
              <NavLink>Subscription</NavLink>
            </div>
        </div>

        <div className='d-grid gap-2 col-6 mx-auto'>
            <Link  to="/reader" className='btn btn-outline-primary'>Go to Reader</Link>
        </div>

        <div className='nav justify-content-center'>
          <NavLink>Your Bookmarks</NavLink>

          <NavLink>Library</NavLink>

          <NavLink>Upload your work</NavLink>
        </div>

        <footer>
          <p>© Copyright Jasinski 2023</p>
          <p>Contact us</p>
        </footer>
      </>
    )
  }

}
export default App;