function Navbar(value) {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img className="mx-3 my-1" src="https://i.postimg.cc/kG9hdsnm/rens.png" alt="ren's stringutils"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link active mx-1" aria-current="page" href="/"><i class="fa fa-house-user" style={{fontSize:"20px"}}></i> Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/renisal"><i class="fa fa-user" style={{fontSize:"20px"}}></i> Creator</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/renisal/react-stringutils"><i class="fa fa-code-fork" style={{fontSize:"20px"}}></i> Source</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/renisal?tab=repositories"><i class="fa fa-angles-right" style={{fontSize:"20px"}}></i> More Apps</a>
              </li>
            </ul>
          </div>
      </nav>
    )
};

export default Navbar;