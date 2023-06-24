const App = () => {
    return <div>
        <Tweet username="lolcat" firstName="Nancy" lastName="James" date="01-01-10" message="Luna is my cousin"/>
        <Tweet username="buddybud" firstName="James" lastName="Lund" date="01-01-10" message="I'm James. Hey!"/>
        <Tweet username="domkingdom" firstName="Luna" lastName="Nash" date="01-01-10" message="I don't know who Nancy is"/>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'))