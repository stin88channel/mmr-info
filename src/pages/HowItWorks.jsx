import mmrLogo from "../assets/mmr_logo.png";
import img9 from "../assets/9.png";
import img8 from "../assets/8.png";
import img7 from "../assets/7.png";
import img6 from "../assets/6.png";
import img5 from "../assets/5.png";
import img4 from "../assets/4.png";
import img3 from "../assets/3.png";
import img2 from "../assets/2.png";
import img1 from "../assets/1.png";
import { useState, useEffect } from "react";

import "./HowItWorks";

// Объект с переводами
const translations = {
  en: {
    title: "Unique Payment ",
    widget: "Widget",
    home: "Home",
    contacts: "Contacts",
    howItWorks: "How it works?",
    number1: "1. ",
    number2: "2. ",
    number3: "3. ",
    number4: "4. ",
    step1:
      "You install a special script on your site and connect the 'Top Up Balance' button to it.",
    step2:
      "The user makes a transfer to our payment system and confirms the sending with a receipt.",
    step3:
      "After successful payment, you receive a notification in the form of a callback response, which you can process in any way.",
    step4:
      "You receive funds in USDT cryptocurrency (on the TRC-20 network) within 5 minutes after a successful transaction.",
    adminPanel: "Administrative Panel",
    adminPanelDescription:
      "Along with the payment widget, we provide an administrative panel where all transactions, transfer receipts, and transaction hashes in cryptocurrency are recorded, as well as the current average exchange rate of cryptocurrency exchanges.",
    telegramBot: "Telegram Bot",
    telegramBotDescription:
      "All changes and transaction statuses are recorded in the system. After connecting the widget, you can add our smart Telegram bot to any chat and receive instant notifications in a convenient format.",
    callback: "Callback",
    callbackDescription:
      "With our API, you can automate the instant crediting of funds to the user's balance. The successful callback response reliably works and returns all necessary data about the client.",
    usdt: "USDT",
    usdtDescription:
      "After successful replenishment, USDT is credited to the wallet you specified within 5 minutes. You can specify as many wallets as you want and set any order for their replenishment.",
    link: "Link",
    static: "Statistics and automation",
    footerTitle: "MMR-PAY",
    footerRights: "© 2023 MMR-PAY. All rights reserved.",
    footerDescription: "A next-generation payment system for your business.",
  },
  ru: {
    title: "Уникальный ",
    widget: "платежный виджет",
    home: "Главная",
    contacts: "Контакты",
    howItWorks: "Как это работает?",
    number1: "1. ",
    number2: "2. ",
    number3: "3. ",
    number4: "4. ",
    step1:
      "Вы устанавливаете специальный скрипт на свой сайт и подключаете кнопку 'Пополнить баланс' к нему.",
    step2:
      "Пользователь совершает перевод в нашу платежную систему и подтверждает отправку чеком.",
    step3:
      "После успешной оплаты, Вы получаете уведомление в виде callback ответа, который Вы можете обработать любым образом.",
    step4:
      "Вы получаете средства в криптовалюте USDT (в сети TRC-20) в течение 5 минут после успешной транзакции.",
    adminPanel: "Административная панель",
    adminPanelDescription:
      "Вместе с платежным виджетом, мы предоставляем административную панель, где фиксируются все транзакции, чеки переводов и хеши транзакций в криптовалюте, а также отображается актуальный средний курс криптообменников.",
    telegramBot: "Телеграм бот",
    telegramBotDescription:
      "Все изменения и статусы транзакций фиксируются в системе. После подключения виджета, Вы сможете добавить в любой чат нашего умного телеграм-бота и получать моментальные уведомления в удобном формате.",
    callback: "Callback",
    callbackDescription:
      "С помощью нашего API, Вы сможете автоматизировать моментальное зачисление средств на баланс пользователя. Успешный callback ответ стабильно работает и отдает все необходимые данные о клиенте.",
    usdt: "USDT",
    usdtDescription:
      "После успешного пополнения USDT зачисляются на указанный Вами кошелек в течение 5 минут. Вы можете указать сколько угодно кошельков и задать любой порядок их пополнения.",
    link: "Подключить",
    static: "Статистика и автоматизация",
    footerTitle: "MMR-PAY",
    footerRights: "© 2023 MMR-PAY. Все права защищены.",
    footerDescription: "Платежная система нового поколения для вашего бизнеса.",
  },
};

function HowItWorks() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "RU";
  });

  const toggleLanguage = () => {
    const newLanguage = language === "RU" ? "EN" : "RU";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Сохраняем выбранный язык в localStorage
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    // Добавляем класс visible с задержкой
    const timer = setTimeout(() => {
      navbar.classList.add("visible");
    }, 100); // Задержка в 100 мс для эффекта появления

    return () => {
      clearTimeout(timer); // Очищаем таймер при размонтировании
    };
  }, []);

  // Функция для получения текста на нужном языке
  const getTranslation = (key) => translations[language.toLowerCase()][key];

  return (
    <div>
      <nav id="navbar" className="navbar">
        <a href="/" className="navbar_logo_link">
          <img src={mmrLogo} className="navbar_logo" alt="MMR Logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="/">{getTranslation("home")}</a>
          </li>
          <li>
            <a href="/how-it-works">{getTranslation("howItWorks")}</a>
          </li>
          <li>
            <a href="#contact">{getTranslation("contacts")}</a>
          </li>
        </ul>
        <button className="language-toggle" onClick={toggleLanguage}>
          {language}
        </button>
      </nav>

      {/* Новый блок на всю высоту экрана */}
      <div className="info-block">
        <div className="left-section">
          <h1 className="left-title">
            {getTranslation("title")}
            <span>{getTranslation("widget")}</span>
          </h1>
          <img src={img1} alt="Описание изображения" className="left-image" />
          <button className="action-button">{getTranslation("link")}</button>
        </div>
        <div className="right-section">
          <h1 className="right-title">{getTranslation("howItWorks")}</h1>
          <p className="right-text">
            <span>{getTranslation("number1")}</span>
            {getTranslation("step1")}
          </p>
          <p className="right-text">
            <span>{getTranslation("number2")}</span>
            {getTranslation("step2")}
          </p>
          <p className="right-text">
            <span>{getTranslation("number3")}</span>
            {getTranslation("step3")}
          </p>
          <p className="right-text">
            <span>{getTranslation("number4")}</span>
            {getTranslation("step4")}
          </p>
        </div>
      </div>

      <div className="line"></div>

      {/* Новый блок с изображениями, заголовками и текстами */}
      <div className="new-section">
        <h2 className="section-title">{getTranslation("static")}</h2>
        <div className="items">
          <div className="item">
            <img
              src={img4}
              alt="Описание изображения 1"
              className="item-image"
            />
            <div className="item-content">
              <h3 className="item-title">{getTranslation("adminPanel")}</h3>
              <p className="item-text">
                {getTranslation("adminPanelDescription")}
              </p>
            </div>
          </div>

          <div className="item">
            <img
              src={img7}
              alt="Описание изображения 2"
              className="item-image"
            />
            <div className="item-content">
              <h3 className="item-title">{getTranslation("telegramBot")}</h3>
              <p className="item-text">
                {getTranslation("telegramBotDescription")}
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src={img8}
              alt="Описание изображения 3"
              className="item-image"
            />
            <div className="item-content">
              <h3 className="item-title">{getTranslation("callback")}</h3>
              <p className="item-text">
                {getTranslation("callbackDescription")}
              </p>
            </div>
          </div>
          <div className="item">
            <img
              src={img9}
              alt="Описание изображения 4"
              className="item-image"
            />
            <div className="item-content">
              <h3 className="item-title">{getTranslation("usdt")}</h3>
              <p className="item-text">{getTranslation("usdtDescription")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Добавляем div для линии */}
      <div className="line"></div>

      <footer className="footer">
        <div className="footer-content">
          <img src={mmrLogo} alt="MMR Logo" className="footer-logo" />
          <p className="footer-title">{getTranslation("footerTitle")}</p>
          <p className="footer-rights">{getTranslation("footerRights")}</p>
          <p className="footer-description">
            {getTranslation("footerDescription")}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HowItWorks;
