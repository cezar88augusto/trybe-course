import React from 'react';

class DadJoke extends React.Component {
    constructor() {
        super()

        this.saveJoke = this.saveJoke.bind(this);
        this.renderJokeElement = this.renderJokeElement.bind(this);

        this.state = {
            jokeObj: undefined,
            loading: true,
            storedJokes: [],
        }
    }

    async fetchJoke() {
        //Dois parametros:
        //1ª parametro da setState: ATUALIZAÇÃO DE ESTADO
        this.setState(
            { loading: true },
            async () => {
                const requestHeaders = { headers: { Accept: 'application/json' } };
                const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
                const requestObject = await requestReturn.json();
                this.setState({
                    loading: false,
                    jokeObj: requestObject
                })
            })
    }

    componentDidMount() {
        this.fetchJoke();
    }

    saveJoke() {
        this.setState(({ storedJokes, jokeObj }) => ({
            storedJokes: [...storedJokes, jokeObj]
        }))

        this.fetchJoke();
    }

    renderJokeElement() {
        return (
            <div>
                <p>{this.state.jokeObj.joke}</p>
                <button type="button" onClick={this.saveJoke}>
                    Salvar piada!
                </button>
            </div>
        )
    }

    render() {
        const { storedJokes, loading } = this.state;
        //Se quiser, pode passar this.state.storedJokes na linha 51
        const loadingELement = <span>Loading...</span>
        return (
            <div>
                <span>
                    {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
                </span>
                <p>{loading ? loadingELement : this.renderJokeElement()}</p>
            </div>
        )
    }
}

export default DadJoke;