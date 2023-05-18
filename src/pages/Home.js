import React from 'react';
import Content from '../components/Content';
import NavigationBar from '../components/NavigationBar';
import LastShow from '../components/products/LastShow';


function Home() {


  return (
    <div className="Home">
      {/* <NavigationBar/>      */}
      <main>
        <Content />
        <LastShow/>
      </main>
      <footer>
        <p>© 2023 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
