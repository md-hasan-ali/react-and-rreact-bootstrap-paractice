import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './components/News/News';

function App() {
  const [news, setNews] = useState([])
  console.log(news)
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=e970d0ccb0ed4345a65e3dff5ab106ef')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">

      {news.length === 0 ? <Spinner animation="border" /> :
        <Row xs={1} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>
      }
    </div>
  );
}

export default App;
