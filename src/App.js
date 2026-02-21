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


function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <p>Lets build an aweosme Pizza menu together</p>
      <Pizza />
      <Pizza />
      <Pizza />

    </div>
  );
};

export default App;