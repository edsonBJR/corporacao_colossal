// function pascoa(ano) {
//     a = ano % 19
//     b = parseInt(ano / 100)
//     c = ano % 100
//     d = parseInt(b / 4)
//     e = b % 4
//     f = parseInt((b + 8) / 25)
//     g = parseInt((b - f + 1) / 3)
//     h = (19 * a + b - d - g + 15) % 30
//     i = parseInt(c / 4)
//     k = c % 4
//     L = (32 + 2 * e + 2 * i - h - k) % 7
//     m = parseInt((a + 11 * h + 22 * L) / 451)
//     MES = parseInt((h + L - 7 * m + 114) / 31)
//     DIA = 1 + (h + L - 7 * m + 114) % 31

//     console.log(DIA, MES)
// }
// pascoa(2015)


// Teste da API

// npm i jest @versão
// npm i ts - jest @versao typescript @versao
// npm i supertest @versao
// npm i @types / jest @versao
// npm i @types / supertest @versao

//     -
//     D - E

// google ts - jest
// copiar configuração do jest dentro do packge.json depois de license

//     criar chave testEnviroment: node
// chave scripts em "test"
// trocar a linha para jest

// Configurar o tsconfig.json

// Acrescentar as linhas
//     "exclude": [
//         "**/*.test.ts
//     ]

// uma expressão qualquer arquivo que termine com test.ts não precisa ser compilado.

// import do 'jest'

// test('descricao do teste', () => {

// })

// para executar o teste basta rodar o comando npm test

// Exemplo de Matcher esperando um 200
// Nesse caso o teste passa
import 'jest'
import * as request from 'supertest'

teste('get /feriados', () => {
    return request(address)
        .get('/feriados')
        .then(response => {
            expect(response.status).toBe(200)
        }).catch(fail)
})


// Exemplo de Matcher esperando um 400
// Neste caso o teste falha, devido não ter o código esperado no retorno
import 'jest'
import * as request from 'supertest'

teste('get /feriados', () => {
    return request(address)
        .get('/feriados')
        .then(response => {
            expect(response.status).toBe(400)
        }).catch(fail)
})

// Passando um Matcher que verifica o body
import 'jest'
import * as request from 'supertest'

teste('get /feriados', () => {
    return request(address)
        .get('/feriados')
        .then(response => {
            expect(response.status).toBe(400)
            expect(response.body.items).toBeInstanceOf(Array)
        }).catch(fail)
})

//Teste com post em um cenário que os dados são preenchidos corretos

import 'jest'
import * as request from 'supertest'

teste('post /feriados', () => {
    return request(address)
        .get('/feriados')
        .send({
            codigo_ibge: '',
            nome: '',
        })
        .then(response => {
            expect(response.status).toBe(200)
            expect(response.body.codigo_ibge).toBe('')
            expect(response.body.nome).toBe('')
        }).catch(fail)
})

Função a ser chamada antes de todos os métodos.ajuda a poder fazer várias vezes o mesmo cadastro

let server: Server
beforeAll(() => {
    environment.db.url = process.env.DB_URL || 'mongodb://localhost/meat-api-test-db'
    environment.server.port = process.env.SERVER_PORT || 3001
    address = `http://localhost:${environment.server.port}`
    server = new Server()
    return server.bootstrap([usersRouter])
        .the(() => User.remove({}).exec())
        .catch(console.error)
})


Função para finalizar o processo o node

necessário no server.js configurar o shutdown da aplicação

Função shutdown

shutdown() {
    return mongose.disconnect().then(() => this.application.close())
}

afterAll(() => {

    return server.shutdown()
})


test('get /users/aaaa - not found', () => {

})