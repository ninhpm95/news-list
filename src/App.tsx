import { useEffect, useState } from 'react';
import './App.css';
import HackerNewsList from './components/HackerNewsList';

const fetchData = () => {

}

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(response => {
        return response.json();
      })
      .then(json => {
        setData(json);
      });
  }, []);

  return (
    <div className="App">
      <HackerNewsList />
    </div>
  );
}

export default App;
