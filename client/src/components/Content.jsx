import React from "react";

export default function Content({ name, response, link }) {
  const { active, message } = response;

  const handleClick = () => {
    window.location = `http://${link.url}`;
  };

  return (
    <main>
      {active && <div>{message}</div>}
      <h2>Preview your link:</h2>
      <p>http://www.shrinkenator.com/{name}</p>
      {link.active && <button onClick={handleClick}>Visit {link.name}</button>}
    </main>
  );
}
