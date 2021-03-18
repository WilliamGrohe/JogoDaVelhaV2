window.onload = () => {
    new JogoVelha();
};

class JogoVelha{
    
    constructor(){
        this.iniciaElementos();
    }

    iniciaElementos(){
        this.velha = document.querySelector('#velha');
        this.velha.addEventListener('click', this.realizaJogada.bind(this));
    }

    realizaJogada(event){
        event.target.innerHTML = 'X';
    }

}