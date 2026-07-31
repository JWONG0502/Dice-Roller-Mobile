const STORAGE_KEY = "diceRollerLanguage";

const uiCopy = {
  zh: {
    languageSwitch: "EN",
    about: "关于我们",
    contact: "联系我们",
    privacyPolicy: "隐私政策",
    backToRoller: "返回摇骰子",
  },
  en: {
    languageSwitch: "中",
    about: "About",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    backToRoller: "Back to Roller",
  },
};

const pageCopy = {
  zh: {
    about: {
      title: "关于我们",
      paragraphs: [
        "摇骰子是一个移动端在线骰子工具。你可以把手机当作电子骰盅，在朋友聚会、桌游、派对、喝酒游戏或临时需要随机点数的时候使用。",
        "网站不需要注册，也不需要下载 App。打开网页，选择玩法，点击摇骰即可开始。摇骰后，你可以上滑骰盅查看骰子点数，也可以下滑把骰盅重新盖上。",
        "目前支持的玩法包括：普通摇点数、比大小、大小判定、单双判定、点数判定、真心话大冒险、喝酒游戏骰子、快艇骰子。",
        "所有结果均为前端随机生成，仅供娱乐使用。",
      ],
    },
    contact: {
      title: "联系我们",
      paragraphs: [
        "如果你有问题、建议或合作需求，可以通过以下邮箱联系：",
        "hjianhua33@gmail.com",
      ],
      email: "hjianhua33@gmail.com",
      mailto: "mailto:hjianhua33@gmail.com",
    },
    privacyPolicy: {
      title: "隐私政策",
      paragraphs: [
        "本网站是一个纯前端的在线骰子工具。",
        "我们不要求用户注册或登录。",
        "我们不会主动收集你的姓名、电话号码、邮箱地址或其他个人身份信息。",
        "摇骰结果在你的浏览器中随机生成，不会上传到服务器。",
        "网站可能会在你的设备本地保存语言、静音等偏好设置，用于改善下次访问体验。这些设置仅保存在你的浏览器中。",
        "本网站计划接入 Google AdSense 等广告服务。Google 等第三方供应商可能会使用 Cookie 投放广告。",
        "Google 可能会根据用户访问本网站和其他网站的情况投放个性化广告。",
        "用户可以通过 Google 广告设置管理个性化广告。",
        "本网站可能会收集基本访问数据及广告统计数据，例如页面访问、广告展示和广告点击等汇总信息，用于了解网站使用情况和广告表现。",
        "如果你通过邮箱主动联系我们，我们会收到你的邮箱地址和邮件内容，并仅用于回复你的问题。",
        "本网站不涉及真实金钱交易、押注或赌博功能。所有玩法仅供娱乐。",
        "如果未来隐私政策发生变化，我们会在本页面更新。",
      ],
    },
  },
  en: {
    about: {
      title: "About",
      paragraphs: [
        "Dice Roller is a mobile-friendly online dice tool. You can use your phone as a digital dice cup for parties, board games, drinking games, or any moment when you need quick random dice results.",
        "No account or app download is required. Open the site, choose a mode, and roll. After rolling, swipe up on the dice cup to reveal the dice, or swipe down to cover them again.",
        "Available modes include Free Roll, Higher Roll, Big or Small, Odd or Even, Total Points, Truth or Dare, Drinking Dice, and Yahtzee Lite.",
        "All results are randomly generated in the browser and are for entertainment only.",
      ],
    },
    contact: {
      title: "Contact",
      paragraphs: [
        "For questions, feedback, or collaboration, contact:",
        "hjianhua33@gmail.com",
      ],
      email: "hjianhua33@gmail.com",
      mailto: "mailto:hjianhua33@gmail.com",
    },
    privacyPolicy: {
      title: "Privacy Policy",
      paragraphs: [
        "This website is a front-end online dice tool.",
        "We do not require users to create an account or log in.",
        "We do not actively collect your name, phone number, email address, or other personal identification information.",
        "Dice results are randomly generated in your browser and are not uploaded to a server.",
        "The site may store preferences such as language and sound settings locally in your browser to improve your next visit. These settings stay on your device.",
        "This website plans to use advertising services such as Google AdSense. Google and other third-party vendors may use cookies to serve ads.",
        "Google may use information about your visits to this website and other websites to provide personalized ads.",
        "Users can manage personalized ads through Google Ads Settings.",
        "This website may collect basic access and advertising statistics, such as page visits, ad impressions, and ad clicks, to understand site usage and ad performance.",
        "If you contact us by email, we will receive your email address and message content, and we will use them only to respond to your request.",
        "This website does not provide real-money transactions, betting, or gambling features. All modes are for entertainment only.",
        "If this Privacy Policy changes in the future, we will update this page.",
      ],
    },
  },
};

let language = readLanguage();

function readLanguage() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) || "en";
  } catch {
    return "en";
  }
}

function writeLanguage(value) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Local storage can be unavailable in private or embedded contexts.
  }
}

function render() {
  const pageKey = document.querySelector("[data-static-page]").dataset.staticPage;
  const data = pageCopy[language][pageKey];
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.querySelector("#languageButton").textContent = uiCopy[language].languageSwitch;
  document.querySelector("[data-static-title]").textContent = data.title;
  document.title = `${data.title} | Dice Roller`;
  document.querySelectorAll("[data-ui-copy]").forEach((node) => {
    node.textContent = uiCopy[language][node.dataset.uiCopy];
  });

  const content = document.querySelector("#staticContent");
  content.innerHTML = `<h2>${data.title}</h2>`;
  data.paragraphs.forEach((paragraph) => {
    const p = document.createElement("p");
    if (pageKey === "contact" && paragraph === data.email) {
      const link = document.createElement("a");
      link.href = data.mailto;
      link.textContent = data.email;
      p.appendChild(link);
    } else {
      p.textContent = paragraph;
    }
    content.appendChild(p);
  });
}

document.querySelector("#languageButton").addEventListener("click", () => {
  language = language === "zh" ? "en" : "zh";
  writeLanguage(language);
  render();
});

render();
