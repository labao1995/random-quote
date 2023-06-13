import './Quote.scss';

function Quotes({ quote, getMultiQuotes, setDisplayQuote }) {
    return (
        <div className="quotes-container">
            <div className='quotes-content'>
                "{quote?.quoteText}"
            </div>
            <div className='quotes-author'>
                <div className='quotes-text'>
                    <span className='author-name'>
                        {quote?.quoteAuthor}
                    </span>
                    <p className='author-title'>
                        {quote?.quoteGenre}
                    </p>
                </div>
                <span className="material-symbols-outlined" onClick={() => {
                    setDisplayQuote(prev => !prev)
                    getMultiQuotes(quote?.quoteAuthor, 3)
                }
                }>
                    arrow_right_alt
                </span>
            </div>
        </div>
    )
}

export default Quotes