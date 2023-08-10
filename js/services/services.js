const BASE_URL = 'https://api.telegram.org/bot';
const token = '6405882699:AAFV_HCcOoSXM45aPtxTIHCqz0D418QVhN8';
const chatId = '670917134';

export const sendMessage = async (result) => {
    try {
        const url = `${BASE_URL}${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(result)}`;
        const response = await fetch(url);
        alert('Message is send, Thank You');
        

        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};
