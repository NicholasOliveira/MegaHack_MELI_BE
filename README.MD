<h1 align="center">MegaHack 5 - MELI</h1>

> This project was created to provide Meli Project's backend functionality from MegaHack5.

## ⚙ Requirements

```sh
nodejs>= 14
yarn
```

## 🔨 Install

```sh
git clone it
yarn
yarn start:dev
```

## 🔨 Build

```sh
yarn build
```

## 💻 Usage

```sh
Buscar informações de Clientes

GET http://localhost:8080/customer/
response:
[
  {
    "name": "Dona Lia Calçados",
    "level": 3,
    "income": 123.45,
    "sales_amount": 5,
    "income_average": 24.69,
    "wharehouse": [
      {
        "product": {
          "id": "93f7ee17-7f8e-4228-a1ee-eae9c1ebe623",
          "product_name": "Sapato preto alto",
          "product_description": "Sapato comum,preto",
          "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
          "product_category": "shoes",
          "price": 120,
          "average_sell": 23940,
          "rating": 3,
          "relevance": 24
        },
        "available": 4,
        "income": 123,
        "last_sale": "2020-11-13T20:43:00.110Z",
        "sell_quantity": 3
      },
      {
        "product": {
          "id": "3683fa98-3afc-4055-9221-277fb4d480b1",
          "product_name": "Sapato marrom alto",
          "product_description": "Sapato comum,marrom",
          "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
          "product_category": "shoes",
          "price": 100,
          "average_sell": 35000,
          "rating": 3.5,
          "relevance": 42
        },
        "available": 0,
        "income": 25,
        "last_sale": "2020-11-13T20:43:00.110Z",
        "sell_quantity": 2
      }
    ]
  }
]

___

Buscar Informações de produtos :
GET http://localhost:8080/products/
Response :
[
  {
    "id": "93f7ee17-7f8e-4228-a1ee-eae9c1ebe623",
    "product_name": "Sapato preto alto",
    "product_description": "Sapato comum,preto",
    "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
    "product_category": "shoes",
    "price": 120,
    "average_sell": 23940,
    "rating": 3,
    "relevance": 24
  },
  {
    "id": "3683fa98-3afc-4055-9221-277fb4d480b1",
    "product_name": "Sapato marrom alto",
    "product_description": "Sapato comum,marrom",
    "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
    "product_category": "shoes",
    "price": 100,
    "average_sell": 35000,
    "rating": 3.5,
    "relevance": 42
  },
  {
    "id": "ca76f709-ec95-44be-8cf9-375cc9beb56d",
    "product_name": "Sapato prateado médio",
    "product_description": "Sapato prateado com cano médio",
    "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
    "product_category": "shoes",
    "price": 98,
    "average_sell": 50351,
    "rating": 4,
    "relevance": 69
  },
  {
    "id": "308856ec-b6ec-496f-b7c3-d0f5a0365319",
    "product_name": "Sapato Scarpin",
    "product_description": "Sapato scarpin tradicional",
    "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
    "product_category": "shoes",
    "price": 145,
    "average_sell": 83241,
    "rating": 4.5,
    "relevance": 130
  }
]
___
___

Buscar Informações de produtos utilização predição de melhores tendências :

Onde 'shoe' se referen à categoria macro do produto

GET http://localhost:3333/products/predictions?category=shoe

Response:

[
  {
    "id": "308856ec-b6ec-496f-b7c3-d0f5a0365319",
    "product_name": "Sapato Scarpin",
    "product_description": "Sapato scarpin tradicional",
    "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
    "product_category": "shoes",
    "price": 145,
    "average_sell": 83241,
    "rating": 4.5,
    "relevance": 130
  },
  {
    "id": "ca76f709-ec95-44be-8cf9-375cc9beb56d",
    "product_name": "Sapato prateado médio",
    "product_description": "Sapato prateado com cano médio",
    "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
    "product_category": "shoes",
    "price": 98,
    "average_sell": 50351,
    "rating": 4,
    "relevance": 69
  },
  {
    "id": "3683fa98-3afc-4055-9221-277fb4d480b1",
    "product_name": "Sapato marrom alto",
    "product_description": "Sapato comum,marrom",
    "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
    "product_category": "shoes",
    "price": 100,
    "average_sell": 35000,
    "rating": 3.5,
    "relevance": 42
  },
  {
    "id": "93f7ee17-7f8e-4228-a1ee-eae9c1ebe623",
    "product_name": "Sapato preto alto",
    "product_description": "Sapato comum,preto",
    "product_image": "https://icons.iconarchive.com/icons/icons8/windows-8/128/Clothing-Shoe-Man-icon.png",
    "product_category": "shoes",
    "price": 120,
    "average_sell": 23940,
    "rating": 3,
    "relevance": 24
  }

___

Buscar Informações de de mensagens :

GET http://localhost:3333/products/message/:id

Response: string com mensagem

___

Buscar de predições de um produto para o mes seguinte :

GET http://localhost:3333/products/predictionsmonth/MesAtual/ProductID

http://localhost:3333/products/predictionsmonth/10/1
Response:
// http://localhost:3333/products/predictionsmonth/10/1

{
  "product": [
    {
      "id": 1,
      "product_name": "Sapato Feminino Marrom",
      "product_description": "Sapato",
      "product_image": "https://i.ibb.co/SwsGZXF/25503-whisky-pe-01.png",
      "product_category": "shoes",
      "price": 150,
      "cost": 100,
      "profit": 0.5,
      "average_sell": 35000,
      "rating": 3.5,
      "relevance": 42
    }
  ],
  "last_month_sales": 2,
  "next_month_prediction": 14
}

___

Buscar histórico de vendas geral :

GET http://localhost:3333/products/history

Response:
[
  {
    "id": 1,
    "product_id": 0,
    "quantity": 1,
    "sale_date_day": 1,
    "sale_date_month": 10,
    "sale_date_year": 2020,
    "product": {
      "id": 0,
      "product_name": "Sapato Feminino Casual",
      "product_description": "Sapato",
      "product_image": "https://i.ibb.co/d0JTxyV/Sapatos-femininos-estilo-brit-nico-sapatos-de-salto-grosso-cal-ados-soltos-coringa-salto-alto-cabe-j.jpg",
      "product_category": "shoes",
      "price": 99,
      "cost": 30,
      "profit": 2.3,
      "average_sell": 23940,
      "rating": 3,
      "relevance": 24
    }
  },
  {
    "id": 2,
    "product_id": 0,
    "quantity": 1,
    "sale_date_day": 5,
    "sale_date_month": 10,
    "sale_date_year": 2020,
    "product": {
      "id": 0,
      "product_name": "Sapato Feminino Casual",
      "product_description": "Sapato",
      "product_image": "https://i.ibb.co/d0JTxyV/Sapatos-femininos-estilo-brit-nico-sapatos-de-salto-grosso-cal-ados-soltos-coringa-salto-alto-cabe-j.jpg",
      "product_category": "shoes",
      "price": 99,
      "cost": 30,
      "profit": 2.3,
      "average_sell": 23940,
      "rating": 3,
      "relevance": 24
    }
  }]
]

```
