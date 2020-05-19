var OlaMundo = /** @class */ (function () {
    function OlaMundo(id, name) {
        this.Id = id;
        this.Name = name;
    }
    OlaMundo.prototype.notificarUsuario = function () {
        alert('Olá ${this.Name}');
    };
    return OlaMundo;
}());
var ola = new OlaMundo(1, "Aldo");
ola.notificarUsuario();
