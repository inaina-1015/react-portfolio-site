import './App.css';
// Headerコンポーネントをimportする
import { Header } from './components/Header';
import { FaBeer } from 'react-icons/fa';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
    </>
  );
}

class Question {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

export default App;