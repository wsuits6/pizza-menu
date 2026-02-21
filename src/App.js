function Pizza() {
  return (
    <div className="pizza">
      <img src="https://www.simplyscratch.com/wp-content/uploads/2023/04/Garlic-Herb-Olive-Oil-Bread-Dip-l-SimplyScratch-13-700x1049.jpg" /> 
      <div>
        <h3>Focaccia</h3>
        <p>Bread with Italian Olive Oil</p>
        <span>$6</span>
      </div>
    </div>
  )
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  
  if (hour >= openHour && hour <= closeHour) {
    alert("We're currently open!");
  } else {
    alert("Sorry, we're closed");
  }
  
  return (
    <footer>
      We're currently open. {new Date().toLocaleTimeString()}
    </footer>
  );
}



function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>Lets build an aweosme Pizza menu together</p>
      <Pizza />
      <Pizza />
      <Pizza />

      <Footer />
    </div>
  );
};

export default App;