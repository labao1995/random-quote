import { useEffect, useState } from 'react';
import './App.scss';
import axios from 'axios';
import Quote from './components/Quote/Quote';
import Quotes from './components/Quotes/Quotes';


function App() {
  const [quote, setQuote] = useState();
  console.log(quote)
  const [quotes, setQuotes] = useState();
  const [author, setAuthor] = useState();
  const [displayQuote, setDisplayQuote] = useState(true);



  const getRandomQuote = () => {
    const URL = 'https://quote-garden.onrender.com/api/v3/quotes/random';
    axios.get(URL).then(res => {
      setQuote(res);
    })
  }

  useEffect(() => {
    getRandomQuote();
  }, [])

  const getMultiQuotes = async (author, number) => {
    console.log(author)
    const URL = 'https://quote-garden.onrender.com/api/v3/quotes';
    const params = {
      author: author,
      limit: number
    }
    await axios.get(URL, { params: params }).then(res => {
      setQuotes(res);
    })
    setAuthor(author)
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='header-icon' onClick={getRandomQuote}>
          <span>random</span>
          <span className="material-icons">sync</span>
        </div>
      </div>
      <div className='quotes'>
        {
          displayQuote ?
            (quote?.data?.data?.map((quoteData, index) => (
              <Quote key={index} quote={quoteData} getMultiQuotes={getMultiQuotes} setDisplayQuote={setDisplayQuote} />
            )))
            :
            (
              <Quotes quotes={quotes} author={author} />
            )
        }
      </div>
    </div>
  );
}

export default App
