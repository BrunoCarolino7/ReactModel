import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

createServer({

  models: {
    transaction: Model,
    user: Model,
  },

  seeds(server) { //iniciando o db já com alguns dados de exemplo pro usuario
    server.db.loadData({
      transactions: [ // nome da tabela em models (nome da tabela + 's')
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2020-02-12 06:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          value: 'withdraw',
          amount: 1100,
          createdAt: new Date('2020-02-12 09:00:00')
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => { //em sincronia com newtransactionmodal api.post
      const data = JSON.parse(request.requestBody)//request são os dados que vem de newtransactionmodal (title, amount etc)

      return schema.create('transaction', data); // esse transaction é do DB do mirage, que está em Models:{}
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);