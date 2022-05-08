import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextArea from './components/TextArea';

function App() {

  return (
    <>
  <Navbar about="About" home="Home"/>
  <div className="container">
    <TextArea/>
  </div>
<footer className="page-footer font-small blue">

  <h6><div className="footer-copyright text-center py-3">Stringify: OS-Project-2022:
    <a className= "text-muted mx-1" href="/">https://github.com/renisal</a>
  </div></h6>

</footer>
  </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string
};