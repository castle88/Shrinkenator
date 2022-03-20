import React from "react";

export default function Header({ handleSubmit, handleChange, form }) {
  const { url, name } = form;

  return (
    <header>
      <h1>Welcome to Shrinkenator</h1>
      <p>Crushing your ugly long links into neat little packages</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">URL:</label>
        <input name="url" type="text" value={url} onChange={handleChange} />
        <label htmlFor="name">Nickname:</label>
        <input name="name" type="text" value={name} onChange={handleChange} />
        <button type="submit">Shrink It</button>
      </form>
    </header>
  );
}
