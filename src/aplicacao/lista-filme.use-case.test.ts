import { describe, expect, test } from "vitest";
import ListaFilme from "./lista-filme.use-case";
import BancoEmMemoria from "../infra/banco/banco-em-memoria";
describe("ListaFilme", () => {
    const bancoEmMemoria = new BancoEmMemoria();
    test("deve retornar uma lista de filmes", async () => {
        const listaFilme = new ListaFilme(bancoEmMemoria);
        const filmes = await listaFilme.executar();
        expect(filmes.length).toBe(2);
    });
})