import './App.css';
import Header from './Header';
import Main from './Main'
import Schedule from './Schedule';
import Footer from './Footer';
import PlayerSection from './Players';
import NewsContent from './New';
import RegistrationForm from './Register';
import ScrollToTopButton from './ScrollToTop';
import ErrorBoundary from './ErrorBoundary';
{/*import ErrorButton from './ErrorButtonTest'; This is for testing ErrorBoundary*/}



function App() {
  return (
    
    <div className="App">
      <ErrorBoundary>
      {/*<ErrorButton /> This is for testing ErrorBoundary*/}
      <Header />
      <Main />
      
      <ScrollToTopButton />
      <Schedule />
      <div id="PlayerSection">
      <PlayerSection />
      </div>
      <div id="NewsSection">
        <NewsContent />
      </div>
      <div id="RegisterSection">
        <RegistrationForm />
      </div>

      <Footer />
      </ErrorBoundary>
    </div>
    
  );
  
}


export default App;
