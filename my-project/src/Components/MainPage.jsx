import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import ass from './../assets/unnamed.png';
// This is main page state management part
function MainPage() {
  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);

  Modal.setAppElement('#root');
// I have used Axios to fetch API
  useEffect(() => {
    axios
      .get(`https://reactnd-books-api.udacity.com/books`, {
        headers: { 'Authorization': 'whatever-you-want' }
      })
      .then(resolve => {
        setData(resolve.data.books);
        setFilteredBooks(resolve.data.books);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
// This function is for handling the search
  const handleSearch = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filteredBooks = data.filter((book) =>
      book.title.toLowerCase().includes(lowerCaseTerm)
    );

    setFilteredBooks(filteredBooks);
  };

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      //This part is for nav bar
      <div className="bg-gray-800 h-14 flex items-center justify-end justify-between shadow-2xl shadow-slate-700 drop-shadow-lg">
        <Link to="/">
          <img className="rounded-md w-10 h-18 mb-4 ml-3 mt-5" src={ass} alt="" />
        </Link>
        <h1 className="hidden sm:block text-xl hover:scale-95 text-white">Books bring magic</h1>
        //Here only I have created the functional components of main page
        <input
          className="w-20 sm:w-40 rounded-md shadow-2xl shadow-white drop-shadow-lg"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
          type="text"
          placeholder="🔎search "
        />
        <div className="flex">
          <button className={`ml-2 text-white mr-3 px-4 py-2 transition-transform transform focus:outline-none hover:scale-110`}>
            <Link to="/form">
              <button className="ml-2 text-sm text-white mr-3 px-4 py-2 transition-transform transform focus:outline-none hover:scale-110 border-2 border-amber-100">
                Registration
              </button>
            </Link>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2">
        {filteredBooks.length === 0 ? (
          <div className="text-white  text-center col-span-3 ">No data found</div>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className="relative right-10  sm:w-64 ml-24 mt-20 bg-black p-10 rounded-2xl shadow-2xl shadow-slate-900 drop-shadow-lg transform">
              <h4 className="text-lg font-semibold mb-2 text-white">{book.title}</h4>
              <img src={book.imageLinks.smallThumbnail} alt="thumbnail" className="w-full mb-2 cursor-pointer hover:scale-105" onClick={() => openModal(book)} />
              <div className="flex text-center text-white">
                {book.authors.map((author, index) => (
                  <span key={index} className="mr-2">
                    {author}
                  </span>
                ))}
              </div>
              <h4 className="text-white">Ratings🌟: {book.averageRating ? <span>{book.averageRating}/5</span> : "No Rating"}</h4>
              <p className="text-white text-center ml-2 mr-3 px-4 py-2 transition-transform transform focus:outline-none hover:scale-110 bg-green-500  w-16 mt-5 rounded-md">
                <a href="https://www.readanybook.com/search?q=linux%20the%20commoand%20line" target='_blank'>Free</a>
              </p>

              <Modal 
                isOpen={!!selectedBook}
                onRequestClose={closeModal}
                contentLabel="Book Description Modal"
                style={{
                  overlay: {
                    backgroundColor: ' '
                  },
                  content: {
                    width: '50%',
                    margin: 'auto',
                    borderRadius: '10px',
                    padding: '20px'
                  }
                }}
              >
                {selectedBook && (
                  <div className="bg-gray-500 p-10  rounded-md">
                    <div className="flex justify-end ">
                         <button onClick={closeModal}>X</button>
                     </div>
                    <h2 className="text-center text-white text mb-5">{selectedBook.title}</h2>
                    <div className="flex justify-center">
                      <img src={selectedBook.imageLinks.smallThumbnail} className="w-30" alt="thumbnail" />
                    </div>
                    <p className="text-white text-sm mt-4">{selectedBook.description}</p>
                  </div>
                )}
              </Modal>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MainPage;
