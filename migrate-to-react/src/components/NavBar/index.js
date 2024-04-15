import './navbar-top.css'
import icon from '../../icon.jpeg'
import { Navbar, Container } from 'react-bootstrap'
export default function NavBar (ops) {
  return <Navbar class='navbar-expand-md navbar-dark bg-transparent mb-4 head'>
    <Container fluid>
      <img src={icon} style={{ maxWidth: '100%', maxHeight: '100%', height: '10%', width: '10%' }} alt='Icon' />
      <a class='navbar-brand' href='#/'>
	    Stop Pollution and Global Warming </a>
      <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
        <span class='navbar-toggler-icon' />
      </button>
      <div class='collapse navbar-collapse' id='navbarCollapse'>
        <ul class='navbar-nav me-auto mb-2 mb-md-0'>
          <li class='nav-item'>
            <a class='nav-link active' aria-current='page' href='#/'> Home </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' aria-current='page' href='#/timeline'>Timeline</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' aria-current='page' href='#/howcanyouhelp'>How You Can Help</a>
          </li>
        </ul>
        <form class='d-flex' action='/goto'>
          <input class='form-control me-2' type='search' placeholder='Search' aria-label='Search' name='path' style={{ color: 'white', background: 'transparent'}} />
          <button class='btn btn-outline-success' type='submit'>Search</button>
        </form>
      </div>
    </Container>
  </Navbar>
}
