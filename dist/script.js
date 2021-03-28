window.onload = () => {
    new JogoVelha();
};

class JogoVelha{
    
    constructor(){
        this.iniciaElementos();
        this.iniciaEstado();
    }

    iniciaEstado(){
        this.turno = true;
        this.jogadas = [0,0,0,0,0,0,0,0,0];
    }

    iniciaElementos(){
        this.velha = document.querySelector('#velha');
        this.velha.addEventListener('click', (event) => {
            this.realizaJogada(event);
            this.render();
        });
    }

    realizaJogada(event){

        const id = event.target.dataset.id;

        //event.target.innerHTML = this.turno ? 'X' : 'O';
        this.jogadas[id] = this.turno ? 'X': 'O';

        this.turno = !this.turno;
    }

    render(){

        //iterar nos elementos do tabuleiro
        const velhaElemento = document.querySelectorAll('[data-id]');

        for (let i = 0; i < 9; i++) {
            velhaElemento[i].innerHTML = this.jogadas[i] == 0 ? "" : this.jogadas[i];    
        }
    }
    
}