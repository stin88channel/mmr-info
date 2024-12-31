import { useState, useEffect } from "react";
import "./App.css";
import mmrLogo from "./assets/mmr_logo.png";
import img6 from "./assets/6.png";
import img5 from "./assets/5.png";
import img4 from "./assets/4.png";
import img3 from "./assets/3.png";
import img2 from "./assets/2.png";
import img1 from "./assets/1.png";
import { FaArrowDown } from "react-icons/fa";

// Объект с переводами
const translations = {
  en: {
    title: "Payment System of the",
    generation: "New Generation",
    home: "Home",
    contacts: "Contacts",
    description:
      "Accept payments, convert to cryptocurrency, P2P payment widget, automation.",
    howItWorks: "How it works?",
    service: "MMR-PAY is",
    forWhom: "Who is our service for?",
    whyChoose: "Why choose MMR-PAY?",
    whyChooseText:
      "We provide a full range of processing services from accepting payments, converting to cryptocurrency, and making payments.",
    forWhomText:
      "Our service makes it easier to receive payments, replenish balances and make payments to customers of online platforms.",
    serviceText:
      "Payment gateway, merchant account with secure and reliable payment system.",
    contactUs: "How to start using the payment module?",
    step1: "1. Contact us",
    startWork:
      "Once you start working with MMR-PAY, you will receive a full range of payment processing services from receiving, topping up, to automating balance replenishment, sending orders to work.",
    startWorkBr:
      "You will be able to accept payments from customers all over the world.",
    step2: "2. Get a quote",
    manager:
      "Our account manager will contact you and tell you the details of the work and future integration of the service",
    getAQuote:
      "ur account manager will contact you and tell you the details of the work and future integration of the service",
    startAcceptingPayments:
      "After a quick integration, your merchant account will be ready. You will be able to accept payments in a convenient format.",
    step3: "3. Start accepting payments",
    footerTitle: "MMR-PAY",
    footerRights: "© 2023 MMR-PAY. All rights reserved.",
    footerDescription: "A next-generation payment system for your business.",
  },
  ru: {
    title: "Платежная система",
    generation: "нового поколения",
    home: "Главная",
    contacts: "Контакты",
    description:
      "Прием выплат, конвертация в криптовалюту, p2p платежный виджет, автоматизация.",
    howItWorks: "Как это работает?",
    service: "MMR-PAY это",
    forWhom: "Для кого наш сервис?",
    whyChoose: "Почему стоит выбрать MMR-PAY?",
    serviceText:
      "Платежный шлюз, мерчант аккаунт с защищенной и надежной системой платежей.",
    forWhomText:
      "Наш сервис упрощает получение платежей, пополнение балансов и осуществление выплат клиентам онлайн-платформ.",
    whyCooseText:
      "Мы предоставляем полный круг процессинга от приема платежей, конвертации в криптовалюту и осуществления выплат.",
    contactUs: "Как начать пользоваться платежным модулем?",
    step1: "1. Свяжитесь с нами",
    startWork:
      "Начав работу с MMR-PAY, Вы получите полный спектр услуг по процессингу платежей от приема, пополнения баланса, до автоматизации пополнения балансов, отправки заказов в работу.",
    startWorkBr: "Вы сможете принимать оплату с клиентов по всему миру.",
    manager:
      "Наш аккаунт-менеджер свяжется с Вами и расскажет детали работы и будущей интеграции сервиса",
    getAQuote:
      "Наш аккаунт-менеджер свяжется с Вами и расскажет детали работы и будущей интеграции сервиса",
    startAcceptingPayments:
      "После быстрой интеграции, Ваш мерчант-аккаунт будет готов. Вы сможете принимать платежи в удобном формате.",
    step2: "2. Получите КП",
    step3: "3. Начните прием платежей",
    footerTitle: "MMR-PAY",
    footerRights: "© 2023 MMR-PAY. Все права защищены.",
    footerDescription: "Платежная система нового поколения для вашего бизнеса.",
  },
};

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "RU";
  });

  const toggleLanguage = () => {
    const newLanguage = language === "RU" ? "EN" : "RU";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage); // Сохраняем выбранный язык в localStorage
  };

  const scrollToNav = () => {
    const navElement = document.getElementById("navbar");
    if (navElement) {
      navElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      const container = document.getElementById("container");
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        navbar.classList.add("visible");
      } else {
        navbar.classList.remove("visible");
      }

      if (scrollPosition > 300) {
        container.classList.add("visible");
      } else {
        container.classList.remove("visible");
      }

      const blocks = document.querySelectorAll(".block");
      blocks.forEach((block) => {
        const blockPosition =
          block.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition + window.innerHeight > blockPosition + 100) {
          block.classList.add("visible");
        } else {
          block.classList.remove("visible");
        }
      });

      const boxes = document.querySelectorAll(".box");
      boxes.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition + window.innerHeight > boxPosition + 100) {
          box.classList.add("visible");
        } else {
          box.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Функция для получения текста на нужном языке
  const getTranslation = (key) => translations[language.toLowerCase()][key];

  return (
    <>
      <header className="header">
        <img src={mmrLogo} className="logo" alt="MMR Logo" />
        <div className="scroll-indicator" onClick={scrollToNav}>
          <div className="circle">
            <FaArrowDown size={24} color="#ffffff" />
          </div>
        </div>
      </header>
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
      <div id="container" className="container">
        <div className="text-section">
          <h1 className="title">
            <span>{getTranslation("title")}</span>
            <br />
            {getTranslation("generation")}
          </h1>
          <p className="description">{getTranslation("description")}</p>
          <a href="/how-it-works" className="action-button">
            {getTranslation("howItWorks")}
          </a>
        </div>
        <div className="image-section">
          <img src={img6} alt="6" className="image" />
        </div>
      </div>

      <div className="line"></div>

      <div className="three-boxes">
        <div className="box">
          <img src={img2} alt="Box 1" className="box-image" />
          <h2 className="box-title">{getTranslation("service")}</h2>
          <p className="box-description">{getTranslation("serviceText")}</p>
        </div>
        <div className="box">
          <img src={img4} alt="Box 2" className="box-image" />
          <h2 className="box-title">{getTranslation("forWhom")}</h2>
          <p className="box-description">{getTranslation("forWhomText")}</p>
        </div>
        <div className="box">
          <img src={img3} alt="Box 3" className="box-image" />
          <h2 className="box-title">{getTranslation("whyChoose")}</h2>
          <p className="box-description">{getTranslation("whyChooseText")}</p>
        </div>
      </div>

      <div className="line"></div>

      <div className="how-to-use block" id="contact">
        <div className="text-left">
          <h2>{getTranslation("contactUs")}</h2>
          <img src={img5} alt="Описание изображения" className="image" />
        </div>
        <div className="text-right">
          <p>
            {getTranslation("startWork")} <br />
            <br />
            {getTranslation("startWorkBr")}
          </p>
          <div className="list">
            <div>
              <h3>{getTranslation("step1")}</h3>
              <p>{getTranslation("manager")}</p>
            </div>
            <div>
              <h3>{getTranslation("step2")}</h3>
              <p>{getTranslation("getAQuote")}</p>
            </div>
            <div>
              <h3>{getTranslation("step3")}</h3>
              <p>{getTranslation("startAcceptingPayments")}</p>
            </div>
          </div>
          <div className="button-container">
            <a href="/how-it-works" className="action-button">
              {getTranslation("howItWorks")}
            </a>
          </div>
        </div>
      </div>

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
    </>
  );
}

export default App;
