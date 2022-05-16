import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextArea from './components/TextArea';
import Footer from './components/Footer';

function App() {

  return (
    <>
  <Navbar about="About" home="Home"/>
  <div className="container">
    <TextArea/>
  </div>
<Footer/>
  </>
  );
}

export default App;

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string
};