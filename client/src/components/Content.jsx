import React from "react";

export default function Content({ name, response, link }) {
  const { active, message } = response;

  const handleClick = () => {
    window.location = `http://${link.url}`;
  };

  return (
    <main>
      {active && <div className="message">{message}</div>}
      <h2>SHRINKENATED:</h2>
      <p>http://www.shrinkenator.herokuapp.com/{name}</p>
      {link.active && <button onClick={handleClick}>Visit {link.name}</button>}
    </main>
  );
}
