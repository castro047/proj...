const Events = () => {
    const handleMyEvents = (e) => {
        console.log(e);

    };
    
    return (
        <div>
            <div>
                <button onClick={handleMyEvents}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("clicou!")}>Clique aqui tambem!</button>
            </div>
        </div>
    )
}

export default Events;