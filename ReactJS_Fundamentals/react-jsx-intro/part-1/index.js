const App = () => {
    return <div>
        <FirstComponent />
        <NamedComponent name="Bootie"/>
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));