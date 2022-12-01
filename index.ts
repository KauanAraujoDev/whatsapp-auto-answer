console.log('Hello World');

import * as venom from 'venom-bot';

import * as pants from './stock/pants.json';
import * as shirt from './stock/shirt.json';

const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

venom.create('support').then((client) => {start(client)}).catch((err) => {});

function start(client: any) {
    client.onMessage(async (message: any) => {
        if (message.isGroupMsg === false) {
            if (message.body == 'oi') {
                await client.sendText(message.from, '*Olá, esta e nossa lista de funções*\n1 - Calças a venda\n2 - Camisas a venda')
            }
            if (message.body == '1') {
                let clothes = '*Lista de calças a venda:* \n'
                
                pants.forEach((parts) => {
                    clothes = `${clothes}Nome: *${parts.name}*, Tamanho: *${parts.number}*, Preço: *${formatter.format(parts.price)}* \n`
                })

                await client.sendText(message.from, clothes)
            }
            if (message.body == '2') {
                let clothes = '*Lista de camisas a venda:* \n'
                
                shirt.forEach((parts) => {
                    clothes = `${clothes}Nome: *${parts.name}*, Tamanho: *${parts.number}*, Preço: *${formatter.format(parts.price)}* \n`
                })

                await client.sendText(message.from, clothes)
            }
        }
    });
}