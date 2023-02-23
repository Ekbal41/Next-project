function Footer() {
  return (
    <>
      <footer className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid ">
          <div
          className="cursive"
        style={{
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
          >Copyright 2023</div>
          <div>
            <a className="icon" href="#"><i className="bi bi-github"></i></a>
            <a className="icon" href="#"><i className="bi bi-facebook"></i></a>
            <a className="icon" href="#"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
