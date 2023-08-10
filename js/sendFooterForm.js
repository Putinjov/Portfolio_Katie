import { sendMessage } from "./services/services.js";

const form = document.getElementById('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(this);

    const result = `New request to callback!   Name: ${data.get('name')}; phone: ${data.get('phone')}`;

    sendMessage(result);
});