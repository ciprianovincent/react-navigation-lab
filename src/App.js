import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Services() {
  return <h2>Services Page</h2>;
}

function About() {
  return <h2>About Page</h2>;
}

function Contact() {
  return <h2>Contact Page</h2>;
}

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-primary">Welcome to the Home Page</h2>
      <p className="alert alert-info">This is styled with Bootstrap!</p>
      <a href="https://react.dev" target="_blank" rel="noreferrer" className="btn btn-success">
        Go to React Docs
      </a>
      <div className="mt-3">
        <p><a href="/files/guide.pdf" target="_blank" className="btn btn-outline-primary">Download Guide (PDF)</a></p>
        <p><a href="/files/manual.docx" target="_blank" className="btn btn-outline-secondary">Download Manual (DOCX)</a></p>
        <p><a href="#section1" className="btn btn-link">Jump to Section 1</a></p>
        <p><a href="#section2" className="btn btn-link">Jump to Section 2</a></p>
      </div>
      <div style={{ marginTop: "200px" }} id="section1">
        <h3>Section 1</h3>
        <p>This is a specific point in the page.</p>
      </div>
      <div style={{ marginTop: "200px" }} id="section2">
        <h3>Section 2</h3>
        <p>This is another section on the page.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">My React Lab</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
