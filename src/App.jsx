import React, { useState } from 'react';
import './app.css';

// Child component - Greeting Card (demonstrates props)
function GreetingCard({ name }) {
  return (
    <div className="greeting-card">
      {/* Conditional rendering: show greeting only if name is entered */}
      {name ? (
        <h2 className="greeting-text">Hello {name} welcome to my react app</h2>
      ) : (
        <p className="placeholder-text">Enter your name above to see your greeting</p>
      )}
    </div>
  );
}

// Child component - Info Section (demonstrates props)
function InfoSection({ title, description }) {
  return (
    <section className="info-section">
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  );
}

// Main App component
function App() {
  // State: manage user name input
  const [name, setName] = useState('');

  // Event handler: Update name as user types
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="app-container">
      {/* Main heading */}
      <header className="app-header">
        <h1>My First React App</h1>
      </header>

      <main className="app-main">
        {/* Info section about frontend developer */}
        <InfoSection
          title="About Frontend Development"
          description="Frontend development is the art of creating beautiful, interactive user experiences. It combines HTML, CSS, and JavaScript to build responsive web applications. Frontend developers use frameworks like React to manage complex user interfaces efficiently and create seamless interactions."
        />

        {/* Input field section */}
        <div className="input-section">
          <label htmlFor="name-input" className="input-label">
            Enter your name:
          </label>
          <input
            id="name-input"
            type="text"
            className="name-input"
            placeholder="Type your name here..."
            value={name}
            onChange={handleNameChange}
          />
        </div>

        {/* Greeting card - passes name as prop */}
        <GreetingCard name={name} />

        {/* Conditional rendering: show character count only if name has content */}
        {name && (
          <div className="char-count">
            <p>Character count: {name.length}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;