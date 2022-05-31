// import logo from './logo.svg';
import React, { useState } from 'react';
import data from './Data'
import List from './Lists'


function App() {
  const [people, setPeople] = useState(data)
  return (
    <main className='whitebox'>

    <div className='box'>
      <section className='container'>
      
        <h3>{people.length} birthdays today</h3>
        
      <div className='trial'>
        <List className="order" people={people}/>
      </div>

        <center>
          <button className='btn' onClick={() => setPeople([])}>Clear birthdays</button>
        </center>
      </section>
    </div>

    </main>
  );
}

export default App;
