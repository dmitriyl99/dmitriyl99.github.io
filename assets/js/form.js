document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    const successText = document.querySelector('.form-text-success');
    const telegramUserId = 6024560226;
    const botToken = '6092912130:AAHEZ_oZIbS3ZIpKzlfbQwYGe9f4SYmok5w';

    let maskOption = {
        mask: '+{998} 00 000-00-00',
        lazy: false
    }
    var mask = IMask(phoneInput, maskOption)

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(nameInput.value, phoneInput.value, messageInput.value)
        successText.style.display = 'block';
        let xhr = new XMLHttpRequest();
        xhr.open('POST', `https://api.telegram.org/bot${botToken}/sendMessage`);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify(
            {
                "chat_id": telegramUserId, 
                "text": `<b>Новая заявка на консультацию!</b>\n\nИмя: ${nameInput.value}\nНомер телефона: ${phoneInput.value}\nСообщение: ${messageInput.value}`,
                "parse_mode": 'HTML'
            }
        ));
        nameInput.value = '';
        phoneInput.value = '';
        var mask = IMask(phoneInput, maskOption)
        messageInput.value = '';
        setTimeout(function () {
            successText.style.display = 'none';
        }, 5000);
    })
});