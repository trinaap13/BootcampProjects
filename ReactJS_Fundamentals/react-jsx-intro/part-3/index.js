const App = () => {
    return (
        <div>
          <Person
            name="Amy"
            age={38}
            hobbies={["partying"]}
          />
          <Person name="Marge" age={34} hobbies={["painting", "gambling"]} />
          <Person
            name="Bill"
            age={10}
            hobbies={["knitting", "sleeping"]}
          />
          <Person
            name="Jim"
            age={8}
            hobbies={["swimming", "singing", "jumping"]}
          />
        </div>
      );
}

ReactDOM.render(<App />, document.getElementById('root'))