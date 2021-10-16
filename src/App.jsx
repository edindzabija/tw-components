import { Feature } from './components/Features/features/Features';
import { Footer } from './components/footer/Footer/Footer';
import { Header } from './components/header/Header/Header';
import { Navbar } from './components/navigation/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <Footer />
    </div>
  );
}

export default App;
