import React from 'react';
import Content from '../components/Content';
import NavigationBar from '../components/NavigationBar';

function Home() {


  return (
    <div className="Home">
      <NavigationBar/>     
      <main>
        <Content />
      </main>
      <footer>
        <p>© 2023 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
