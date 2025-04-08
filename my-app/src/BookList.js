import React from "react";
import BookCard from "./BookCard";
import "./BookList.css";

const BookList = (props) => {
    return (
        <>
        <div className="list">
            {props.books.length > 0 ? (
                props.books.map((book, i) => {
                    return (
                        <BookCard
                            key={i}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors[0]}
                            published={book.volumeInfo.publishedDate}
                        />
                    );
                })
            ) : (
                <div className="placeholder">
                    <h2>Your next great read is just a search away!</h2>
                    <p>Discover a world of stories—start searching now!</p>
                    <img src="https://wallpapers.com/images/hd/bookshelf-background-xfix8ihv6dmfjzyu.jpg" alt="No books" className="placeholder-image" />
                </div>
            )}
        </div>
         <div id="footer">
         <p id="footer content">&copy; 2024 Google Books Search. All rights reserved.</p>
     </div>
     </>
    );
};

export default BookList;
