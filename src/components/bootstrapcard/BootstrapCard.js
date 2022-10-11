import React from "react";

function BootstrapCard() {
  return (
    <div className="container">
      <div className="card m-5" style={{ maxWidth: "400px" }}>
        <img
          alt="Card cap"
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg"
        />
        <div className="card-body">
          <h5 className="card-title">Bob Dylan</h5>
          <p className="card-text">
            Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American
            singer/songwriter, author, and artist who has been an influential
            figure in popular music and culture for more than five decades.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Bob_Dylan"
            className="btn btn-primary"
          >
            Go to wikipedia
          </a>
        </div>
      </div>
    </div>
  );
}

export default BootstrapCard;
