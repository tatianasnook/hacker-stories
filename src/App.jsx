import * as React from 'react';
// import './App.css';

const welcome = {
  title: 'React',
  greeting: 'Hey'
};

function getTitle(title){
  return title;
}

function App() {

  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>

      <h2>Hello {getTitle('React')}</h2>

      <label htmlFor='search'>Search: </label>
      <input id='search' type='text'/>

    </div>
  );
}

export default App;
