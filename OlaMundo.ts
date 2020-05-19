class OlaMundo {
    private Id: number;
    private Name: string;

    constructor(id: number, name: string) {
        this.Id = id;
        this.Name = name;
    }

    public notificarUsuario() : void {
        alert('Olá ${this.Name}');
    }
}

var ola = new OlaMundo(1, "Aldo");
ola.notificarUsuario();