import { sendMessage } from "./services/services.js";

const modal = document.querySelector('.modal');
const form = modal.querySelector('#send');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    
    const data = new FormData(this);
    
    // Set default values for email and comment fields if they are falsy
    const email = data.get('email') || 'no data';
    const comment = data.get('comment') || 'no data';
    
    const result = `New order or request to callback!   Name: ${data.get('name')}; email: ${email}; phone: ${data.get('phone')}; Details: ${comment}`;
    
    try {
        const response = await sendMessage(result);
    } catch (error) {
        console.error('Error sending message:', error);
    }
});
