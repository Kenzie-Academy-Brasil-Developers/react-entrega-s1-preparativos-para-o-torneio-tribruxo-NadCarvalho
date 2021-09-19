
const WelcomePage = ({ onBegin }) => {
    return (
        <div className="WelcomePage">
            <h2>Torneio tribruxo</h2>
            <p>Clique no botão para encontrar os feiticeiros!</p>
            <button onClick={ onBegin }>Começar</button>
        </div>
    )
}

export default WelcomePage;
