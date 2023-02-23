import Link from "next/link";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-0  ">
        <div className="container-fluid">
          <a
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#444444",
            }}
            className="navbar-brand"
            href="#"
          >
            N
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link  h-link" href="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h-link" href="/projects">
                  Projects
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              
             
              <li className="nav-item">
                <Link className="nav-link h-link" href="/about">
                  About
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link h-link" href="/contact">
                  Contact
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle h-link"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu">
                  <Link className="dropdown-item h-link" href="/pricing">
                    Pricing
                    <span className="visually-hidden">(current)</span>
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item h-link" href="/fethures">
                    Fethures
                    <span className="visually-hidden">(current)</span>
                  </Link>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                style={{
                  border: "1px solid #339ef4",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                className="form-control me-sm-2"
                type="search"
                placeholder="Search"
              />
              <button className="p-btn-o " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
