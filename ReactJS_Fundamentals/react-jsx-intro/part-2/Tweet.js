const Tweet = (props) => {
    return (
        <div style={{border: '2px double', borderRadius: '30px'}}>
            <h1>{props.username}</h1>
            <h3>{props.firstName}</h3>
            <h3>{props.lastName}</h3>
            <h3>{props.date}</h3>
            <h3>{props.message}</h3>
        </div>
    )
}