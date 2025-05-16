class AuthModel
{
    usuario
    senha

    constructor(usuario,senha)
    {
        this.usuario = usuario
        this.senha = senha
    }

    login()
    {

        let existe = false

        if(this.usuario === "gugu" && this.senha ==="123")
            {

                existe = true
            }

            return existe
    }

}

module.exports = AuthModel 