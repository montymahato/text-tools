function Navbar(value) {

  let darkmode = false;
  const toggleSwitch = () => {
    if (darkmode) {
      document.getElementById('lightmodeText').id = 'darkmodeText';
      document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-light bg-light";
      document.getElementById("myBoxblack").id = "myBoxwhite";
      document.getElementById("timage").src = "strblack.png"
      darkmode = false
    }
    else if (!darkmode) {
      document.getElementById('darkmodeText').id = 'lightmodeText';
      document.getElementById("navbar").className = "navbar navbar-expand-lg navbar-dark bg-dark";
      document.getElementById("myBoxwhite").id = "myBoxblack";
      document.getElementById("timage").src = "strwhite.png"
      darkmode = true
    }
  }

    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img id="timage" src="strblack.png" alt="Stringify"/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active mx-3" aria-current="page" href="/">{value.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{value.about}</a>
              </li>
            </ul>
          </div>
        </div>
        Dark Mode
        <div className="form-check form-switch mx-3">
  <input onClick={toggleSwitch} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>
      </nav>
    )
};

export default Navbar;