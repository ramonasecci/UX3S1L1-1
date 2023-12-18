import './App.css';
import Button from './components/Button';
import ImageClass from './components/Image';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Button nameB="Click Me" />
        <ImageClass src="https://d10mhq06fikmnr.cloudfront.net/catalog/product/s/h/sharkoon_tg7m_os_1.jpg" nameI="Server" />
        <Button nameB="I'm another Button" />
      </div>
    </div>
  );
}

export default App;
