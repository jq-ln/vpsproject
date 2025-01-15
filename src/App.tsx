import logoText from './assets/jq-ln.tsx';
import './App.css';

const Logo = () => {
  const logo = logoText
  // testing
  return (
    <div className="logo">
      <pre>{logo}</pre>
    </div>
  )
}
const App = () => {
  return (
    <div>
      <Logo />
    </div>
  )
}

export default App;
