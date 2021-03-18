window.onload = () => {
    new JogoVelha();
};

class JogoVelha{
    
    constructor(){
        this.iniciaElementos();
    }

    iniciaElementos(){
        this.velha = document.querySelector('#id');
        this.velha.addEventListener('click', this.realizaJogada);
    }

    realizaJogada(){

    }
    
}