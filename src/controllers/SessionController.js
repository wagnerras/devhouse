
//metodos: index, show, update, store, destroy
/*
index: listagem de sessoes
store: criar uma sessao
show: listar uma unica sessao
update: atualizar alguma sessao
destroy: deletar uma sessao
 */

import User from '../models/User';

class SessionController {

   async store(req,res){
        const {email} = req.body;

        //let user = await User.create({email});
        let user = await User.findOne({email}); //verificando se esse usuario ja existe
        if(!user){
            user = await User.create({email}); // cria se não existir
        }

        return res.json(user);
    }
    
}

export default new SessionController();