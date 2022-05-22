import './App.css';
import Headline from './Components/Headline/headline.js';
import ContactTheAuthor from './Components/ContactTheAuthor/contactTheAuthor'
import React from 'react'
import BookSummary from './Components/BookSummary/bookSummary';
import AboutTheAuthor from './Components/AboutTheAuthor/aboutTheAuthor';

function App() {

 

  return (
    <div>
      <Headline/>
      <BookSummary/>
      <ContactTheAuthor/>
    </div>
  );
}

export default App;
