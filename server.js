const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const options = [
    {
      id: 1,
      title: "Вариант 1",
      price: "10 000 руб.",
      includes: "Блоки 1-4",
      blocks: [1, 2, 3, 4]
    },
    {
      id: 2,
      title: "Вариант 2",
      price: "18 000 руб.",
      includes: "Блоки 1-6, 10",
      blocks: [1, 2, 3, 4, 5, 6, 10]
    },
    {
      id: 3,
      title: "Вариант 3",
      price: "24 000 руб.",
      includes: "Блоки 1-10",
      blocks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  ];

  const blockDescriptions = [
    "Шапка сайта - логотип и контакты",
    "Изображение товаров/услуг",
    "Акция с дедлайном",
    "Триггеры доверия",
    "Отзывы клиентов",
    "Кнопка с заголовком",
    "Таймер обратного отсчета",
    "Форма заявки",
    "Кнопка заказа",
    "Преимущества компании"
  ];

  res.render('index', { options, blockDescriptions });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});