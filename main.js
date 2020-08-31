alert('teste');

class Teste {
    //First Class
    metodo(){

    }

    outroMetodo(){

    }
}

class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List {
    constructor() {
        super();

        this.usuario = 'Tiago';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const minhaLista = new ToDoList();

document.getElementById('novoToDo').onclick = function(){
    minhaLista.add('Novo To Do');
}

minhaLista.mostraUsuario();


class Matematica {
    static soma(a,b) {
        return a + b;
    }
}
console.log(Matematica.soma(1,2));