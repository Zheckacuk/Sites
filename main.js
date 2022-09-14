const btn = document.querySelector('#btn_send');

btn.addEventListener('click',send);

function send(){
    const input_name = document.querySelector('#input_name').value;
    const email = document.querySelector('#email').value;
    const text = document.querySelector('#text').value;
    // alert(input_name + email + text);

}