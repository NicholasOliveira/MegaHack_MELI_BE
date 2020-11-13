<h1 align="center">Nosso Banco Digital - Bootcamp ZUP</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.1-blue.svg?cacheSeconds=2592000" />
</p>

> This project was created to develop a digital bank API, caring about the architecture and code efficiency regarding the code maintenance and evolution.

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
]

```
