const payMethod = document.querySelector('#pay-method');
const deliveryMethod = document.querySelector('#delivery-method');
const buttonAddQuantity = document.querySelector('#button-add-quantity');
const buttonSubstractQuantity = document.querySelector('#button-subtract-quantity');
const quantityInput = document.querySelector('#quantity');
const ukrPochta = document.querySelector('#ukr-pochta');
const novaPocta = document.querySelector('#nova-pocta');
const deliveryСompany = document.querySelector('#delivery-company');
const requisites = document.querySelector('#requisites-for-pay');
const buttonOrderConfirm = document.querySelector('#button-order-confirm');
const infoPay = document.querySelector('#info-pay');
const popup = document.querySelector('#popup');
const buttonPay = document.querySelector('#link-pay');
const buttonClosePopup =  document.querySelector('#button-close-popup');
const buttonCloseSuccessfulOrderPopup =  document.querySelector('#button-close-successful-order-popup');
const confirm = document.querySelector('#confirmed');
const textIfCashOnDelivery = document.querySelector('#cash-on-delivery');
const textIfPayBeforedelivery = document.querySelector('#pay-before-delivery');
const outputMethodPay = document.querySelector('#output-method-pay');
const outputMethodDelivery = document.querySelector('#output-method-delivery');
const formPopup = document.querySelector('#form-popup');
const payBeforeDeliveryUkrpochta = ' "Укрпочта"';
const payBeforeDeliveryNovapochta = ' "Новая почта"';
const payPrivatBank = ' Оплата на карту "Приват Банк"'
const cashOnDeliveryNovaPochta = ' Наложеный платеж "Новая почта"';
const cashOnDeliveryUkrpochta = ' Наложеный платеж "Укрпочта"'; 
let price = 190;
const outMainPrice = document.querySelector('#out-main-price');
const outPrice = document.querySelector('#out-price');
let outFirstSum = document.querySelector('#out-first-sum');
let outSecondSum = document.querySelector('#out-second-sum');
//Personal Information
const namePopup = document.querySelector('#name')
const phoneNumberPopup = document.querySelector('#phone');
const surnamePopup = document.querySelector('#surname');
const emailPopup = document.querySelector('#email');
//Nova pochta
const cityNovapochtaPopup = document.querySelector('#city-novapochta');
const departmentNovapochtaPopup = document.querySelector('#department');
//Ukr pochta
const streetUkrpochtaPopup = document.querySelector('#street');
const houseUkrpochtaPopup = document.querySelector('#house');
const flatUkrpochtaPopup = document.querySelector('#flat');
const cityUkrpochtaPopup = document.querySelector('#city-ukrpochta');
const regionUkrpochtaPopup = document.querySelector('#region');
const indexUkrpochtaPopup = document.querySelector('#index'); 
const inputPhone = document.querySelector('#phone');
const copyButton = document.querySelector('#copy-button');
const scrollToTopBtn = document.querySelector('#scroll-to-top-btn');

if (inputPhone.value === "+380") {
    inputPhone.classList.remove('validate');
}

if (flatUkrpochtaPopup.value === '') {
    flatUkrpochtaPopup.classList.remove('validate');
}

function AddClassInputPhone(){
    if (inputPhone.value != "+380" && !inputPhone.classList.contains('validate')) {
        inputPhone.classList.add('validate');
    }
}

function AddClassInputFlat(){
    if (flatUkrpochtaPopup.value != '' && !flatUkrpochtaPopup.classList.contains('validate')) {
        flatUkrpochtaPopup.classList.add('validate');
    }else{
        flatUkrpochtaPopup.classList.remove('validate');
    }
}

outPrice.textContent = price + ' грн';
outMainPrice.textContent = price; 

if(quantityInput.value === '1'){
    outFirstSum.textContent = price + ' грн';
    outSecondSum.textContent = price + ' грн';
}

const quantityAdd = function(){
    quantityInput.value++;
    if (quantityInput.value > 100) quantityInput.value = 1;
    let sum = quantityInput.value * price;
    outFirstSum.textContent = sum + ' грн';
    outSecondSum.textContent = sum + ' грн'; 
}

const quantitySubstract = function(){
    quantityInput.value--;
    if (quantityInput.value < 1) quantityInput.value = 100;
    quantityInput.value * price
    let sum = quantityInput.value * price;
    outFirstSum.textContent = sum + ' грн';
    outSecondSum.textContent = sum + ' грн';
}

const defaultForm = function(){
    if ( payMethod.value === 'novapochta'){
        deliveryСompany.style.display = 'none';
        ukrPochta.style.display = 'none';
        requisites.style.display = 'none';
        buttonOrderConfirm.textContent = 'Заказ подтверждаю';
        infoPay.style.display = 'none';
        textIfCashOnDelivery.style.display = 'block';
        textIfPayBeforedelivery.style.display = 'none';
        outputMethodPay.textContent = cashOnDeliveryNovaPochta;
        outputMethodDelivery.textContent = payBeforeDeliveryNovapochta;

        if (!departmentNovapochtaPopup.hasAttribute('required')) {    
            cityNovapochtaPopup.setAttribute('required','');
            departmentNovapochtaPopup.setAttribute('required','');
        }

        if (streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.removeAttribute('required');
            houseUkrpochtaPopup.removeAttribute('required');
            cityUkrpochtaPopup.removeAttribute('required');
            regionUkrpochtaPopup.removeAttribute('required');
            indexUkrpochtaPopup.removeAttribute('required');
        }
    } 
}

defaultForm();

const choiceOfPaymentMethod = function (){
    if ( payMethod.value === 'novapochta'){
        deliveryСompany.style.display = 'none';
        ukrPochta.style.display = 'none';
        novaPocta.style.display = 'block';
        requisites.style.display = 'none';
        buttonOrderConfirm.textContent = 'Заказ подтверждаю';
        infoPay.style.display = 'none';

        textIfCashOnDelivery.style.display = 'block';
        textIfPayBeforedelivery.style.display = 'none';
        outputMethodPay.textContent = cashOnDeliveryNovaPochta;
        outputMethodDelivery.textContent = payBeforeDeliveryNovapochta;

        if (!departmentNovapochtaPopup.hasAttribute('required')) {    
            cityNovapochtaPopup.setAttribute('required','');
            departmentNovapochtaPopup.setAttribute('required','');
        }

        if (streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.removeAttribute('required');
            houseUkrpochtaPopup.removeAttribute('required');
            cityUkrpochtaPopup.removeAttribute('required');
            regionUkrpochtaPopup.removeAttribute('required');
            indexUkrpochtaPopup.removeAttribute('required');
        }
        
        return 
    }

    if ( payMethod.value === 'privat'){
        deliveryСompany.style.display = 'block';
        ukrPochta.style.display = 'none';
        novaPocta.style.display = 'block';
        requisites.style.display = 'block';
        buttonOrderConfirm.textContent = 'Оплачено';
        infoPay.style.display = 'block';
        textIfCashOnDelivery.style.display = 'none';
        textIfPayBeforedelivery.style.display = 'block';
        outputMethodPay.textContent = payPrivatBank;
        outputMethodDelivery.textContent = payBeforeDeliveryNovapochta;
    }

   if ( payMethod.value === 'ukrpochta' ){
        deliveryСompany.style.display = 'none';
        novaPocta.style.display = 'none';
        ukrPochta.style.display = 'block';
        requisites.style.display = 'none';
        buttonOrderConfirm.textContent = 'Заказ подтверждаю';
        infoPay.style.display = 'none';
        textIfCashOnDelivery.style.display = 'block';
        textIfPayBeforedelivery.style.display = 'none';
        outputMethodPay.textContent = cashOnDeliveryUkrpochta;
        outputMethodDelivery.textContent = payBeforeDeliveryUkrpochta;
          
        if (departmentNovapochtaPopup.hasAttribute('required')) {    
            cityNovapochtaPopup.removeAttribute('required');
            departmentNovapochtaPopup.removeAttribute('required');
        }
        
        if (!streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.setAttribute('required', '');
            houseUkrpochtaPopup.setAttribute('required', '');
            cityUkrpochtaPopup.setAttribute('required', '');
            regionUkrpochtaPopup.setAttribute('required', '');
            indexUkrpochtaPopup.setAttribute('required', '');
        }

        return  
    } 

   if ( payMethod.value === 'privat' && deliveryMethod.value === 'delivery-company-ukrpochta'){
        deliveryСompany.style.display = 'block';
        ukrPochta.style.display = 'block';
        novaPocta.style.display = 'none';
        requisites.style.display = 'block';
        buttonOrderConfirm.textContent = 'Оплачено';
        infoPay.style.display = 'block';
        outputMethodPay.textContent = payPrivatBank;
        outputMethodDelivery.textContent = payBeforeDeliveryUkrpochta;

        if (departmentNovapochtaPopup.hasAttribute('required')) {    
            cityNovapochtaPopup.removeAttribute('required');
            departmentNovapochtaPopup.removeAttribute('required');
        }

        if (!streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.setAttribute('required', '');
            houseUkrpochtaPopup.setAttribute('required', '');
            cityUkrpochtaPopup.setAttribute('required', '');
            regionUkrpochtaPopup.setAttribute('required', '');
            indexUkrpochtaPopup.setAttribute('required', '');
        }
        return   
    }

    if ( payMethod.value === 'privat' && deliveryMethod.value === 'delivery-company-novapocta'){
        deliveryСompany.style.display = 'block';
        ukrPochta.style.display = 'none';
        novaPocta.style.display = 'block';
        requisites.style.display = 'block';
        buttonOrderConfirm.textContent = 'Оплачено';
        infoPay.style.display = 'block';
        outputMethodPay.textContent = payPrivatBank;
        outputMethodDelivery.textContent = payBeforeDeliveryNovapochta;

        if (!departmentNovapochtaPopup.hasAttribute('required','')) {    
            cityNovapochtaPopup.setAttribute('required','');
            departmentNovapochtaPopup.setAttribute('required','');
        }

        if (streetUkrpochtaPopup.hasAttribute('required')) {
            streetUkrpochtaPopup.removeAttribute('required');
            houseUkrpochtaPopup.removeAttribute('required');
            cityUkrpochtaPopup.removeAttribute('required');
            regionUkrpochtaPopup.removeAttribute('required');
            indexUkrpochtaPopup.removeAttribute('required');
        }
        return   
    }
}

const onPopup = function(event){
    event.preventDefault();
    popup.classList.add('js-purchase');
    lockScroll.classList.add('js-lock-scroll');
    if ( !scrollToTopBtn.classList.contains('hidden')) {
        scrollToTopBtn.classList.add('hidden');
    }
   
}

const offPopup = function(){
    popup.classList.remove('js-purchase');
    lockScroll.classList.remove('js-lock-scroll');
    scrollToTopBtn.classList.remove('hidden');
}

const onSuccessfulOrderPopup = function(){
    popup.classList.remove('js-purchase');
    confirm.classList.add('js-confirmed-purchase');
   
}

const offSuccessfulOrderPopup = function(){
    confirm.classList.remove('js-confirmed-purchase');
    lockScroll.classList.remove('js-lock-scroll');
}

window.addEventListener('keydown', function (event) { //close popup pressed button "escape" 
    if (event.key === 'Escape') {
        if (popup.classList.contains('js-purchase') === true) {
            popup.classList.remove('js-purchase');
        }
    }
})

function copy(){
    const copyText = document.querySelector('#copy-text');
    navigator.clipboard.writeText(copyText.textContent);
}

payMethod.addEventListener('change', choiceOfPaymentMethod);
payMethod.addEventListener('change', defaultForm);
deliveryMethod.addEventListener('change', choiceOfPaymentMethod);
buttonPay.addEventListener('click', onPopup);
buttonClosePopup.addEventListener('click', offPopup);
buttonCloseSuccessfulOrderPopup.addEventListener('click', offSuccessfulOrderPopup);
buttonAddQuantity.addEventListener('click', quantityAdd);
buttonSubstractQuantity.addEventListener('click', quantitySubstract);
quantityInput.addEventListener('change', quantityAdd);
quantityInput.addEventListener('change', quantitySubstract);
formPopup.addEventListener('sumbit', onSuccessfulOrderPopup);
inputPhone.addEventListener('blur', AddClassInputPhone);  
flatUkrpochtaPopup.addEventListener('blur', AddClassInputFlat); 
copyButton.addEventListener('click', copy);




