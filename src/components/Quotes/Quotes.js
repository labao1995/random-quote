import './Quotes.scss'

function Quotes({ quotes, author }) {
    return (
        <div className='quotes-list'>
            <div className="quotes-author">{author}</div>
            {
                quotes?.data.data.map((quote, index) => (
                    <div key={index} className="quotes-list-container">
                        <div className='quotes-content'>
                            "{quote.quoteText}"
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Quotes