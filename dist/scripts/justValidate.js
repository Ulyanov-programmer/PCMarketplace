import "../libs/just-validate.production.min.js";
import "../libs/inputmask.min.js";
const inputMaskTel = new Inputmask("+7 (999) 999-99-99");
let telInputSelector = document.querySelector('input[type="tel"]');
inputMaskTel.mask(telInputSelector);
new JustValidate("#order-form", {
  errorFieldCssClass: "invalid",
  errorLabelCssClass: "invalid",
  errorLabelStyle: {
    fontSize: "16px",
    color: "#ff4040",
    marginBlock: "5px"
  },
  errorsContainer: "#errorsContainer"
}).addField(".order-form__name", [
  {
    rule: "required",
    errorMessage: '\u041F\u043E\u043B\u0435 "\u0418\u043C\u044F" \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E!'
  },
  {
    rule: "minLength",
    value: 7,
    errorMessage: "\u0412\u0430\u0448\u0435 \u043F\u043E\u043B\u043D\u043E\u0435 \u0438\u043C\u044F \u0432\u0440\u044F\u0434\u043B\u0438 \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u043B\u0438\u0448\u044C \u0438\u0437 \u0448\u0435\u0441\u0442\u0438 \u0431\u0443\u043A\u0432."
  },
  {
    rule: "function",
    validator: (str) => {
      return /^[а-яА-ЯёЁa-zA-Z ]+$/.test(str);
    },
    errorMessage: '\u041F\u043E\u043B\u0435 "\u0418\u043C\u044F" \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u0437 \u0431\u0443\u043A\u0432 \u0438 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432!'
  }
]).addField(".order-form__tel", [
  {
    rule: "required",
    errorMessage: '\u041F\u043E\u043B\u0435 "\u0422\u0435\u043B\u0435\u0444\u043E\u043D" \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E!'
  },
  {
    rule: "function",
    validator: () => {
      let phoneUnmaskedValue = telInputSelector.inputmask.unmaskedvalue();
      return Number(phoneUnmaskedValue) && phoneUnmaskedValue.length > 9;
    },
    errorMessage: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430!"
  }
]).addField(".order-form__email", [
  {
    rule: "required",
    errorMessage: '\u041F\u043E\u043B\u0435 "E-mail" \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E!'
  },
  {
    rule: "email",
    errorMessage: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 E-mail!"
  }
]).addField("#personal-data", [
  {
    rule: "required",
    errorMessage: "\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u0441\u044F \u0441 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u0412\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445."
  }
]).onSuccess((e) => {
  let formModal = document.querySelector("#order");
  formModal.classList.remove("active");
  let thanksModal = document.querySelector("#thanks");
  thanksModal.classList.add("active");
});
