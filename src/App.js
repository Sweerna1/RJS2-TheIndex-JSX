import React from "react";
import books from "./data";

function App() {
  const authorslist = books.map(book => {
    return (
      <div className="card">
        <div className="image">
          <img
            className="card-img-top img-fluid"
            src={`${book.imageUrl}`}
            alt="J.K. Rowling"
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{`${book.first_name} ${book.last_name}`}</span>
          </h5>
          <small className="card-text">{`${book.books.length} Books`}</small>
        </div>
      </div>
    );
  });
  return (
    <div className="App">
      <div className="row">
        <div className="col-2">
          <div id="sidebar">
            <img src="theindex.svg" className="logo" alt="the index logo" />
            <section>
              <h4 className="menu-item active">
                <button>AUTHORS</button>
              </h4>
            </section>
          </div>
        </div>
        <div className="content col-10">
          <div className="authors">
            <h3>Authors</h3>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <div>{authorslist}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
