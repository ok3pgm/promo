for (let i=0; i<$('.items_container input[type=checkbox]').length; i++) {
let text = $('.items_container input[type=checkbox]')[i].parentElement.getElementsByTagName('label')[0].textContent
const reg = /Небесная|Самоцвет|Купон/
if (reg.test(text)){
let check = $('.items_container input[type=checkbox]')[i]
check.checked=true;
}}
document.querySelector('[type="submit"]').click(); 
