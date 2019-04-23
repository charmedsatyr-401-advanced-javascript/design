import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Content from './components/content/content.js';

const App = () => {
  return (
    <>
      <Header title="React Design" />
      <Content />
      <Footer>
        <div>&copy; 2018 Code Fellows</div>
      </Footer>
    </>
  );
};

export default App;
