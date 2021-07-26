import "reflect-metadata";
import {createConnection} from "typeorm";
import { Loja } from "./entity/Loja";
import { Profissional } from "./entity/Profissional";
import { Restaurante } from "./entity/Restaurante";
import {User} from "./entity/User";


createConnection().then(async connection => {

    console.log("Inserindo um novo usuario no banco de dados...");
    const user = new User();
    user.firstName = "Jones";
    user.lastName = "S. Brito";
    user.age = 20;
    await connection.manager.save(user);
    console.log("Savando usuario com id: " + user.id);

    console.log("Carregando usuario no banco de dados...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

}).catch(error => console.log(error));



createConnection().then(async connection => {

    console.log("Inserindo uma nova loja no banco de dados...");
    const loja = new Loja();
    loja.nomeLoja = "2AWJ";
    loja.endereco = "av. teste";
    
    await connection.manager.save(loja);
    console.log("Saved a new user with id: " + loja.id);

    console.log("Carregando lojas do banco de dados...");
    const lojas = await connection.manager.find(Loja);
    console.log("Loaded Lojas: ", lojas);


}).catch(error => console.log(error));

createConnection().then(async connection => {

    console.log("Inserindo um novo Profissional no banco de dados...");
    const profissional = new Profissional();
    profissional.nomeProfissional = "2AWJ";
    profissional.telefone = "11112222";
    
    await connection.manager.save(profissional);
    console.log("Saved a new user with id: " + profissional.id);

    console.log("Carregando users from the database...");
    const profissionais = await connection.manager.find(Profissional);
    console.log("Loaded profissional: ", profissionais);


}).catch(error => console.log(error));

createConnection().then(async connection => {

    console.log("Inserindo um novo Restaurante no banco de dados...");
    const restaurante = new Restaurante();
    restaurante.nomeRestaurante = "2AWJ";
    restaurante.endereco = "av. teste";
    
    await connection.manager.save(restaurante);
    console.log("Saved a new user with id: " + restaurante.id);

    console.log("Carregando restaurante do banco de dados...");
    const restaurantes = await connection.manager.find(Restaurante);
    console.log("Loaded restaurante : ", restaurantes);


}).catch(error => console.log(error));