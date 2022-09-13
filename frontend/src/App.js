function App() {
  const test = async () => {
    const res = await fetch("http://localhost:8000");
    console.log(await res.json());
  };
  test();
  return (
    <div>
      welcome to frontend <div className="friends_suggestions_icon"></div>{" "}
    </div>
  );
}

export default App;
