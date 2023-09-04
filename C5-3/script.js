function useRequest(url, callback) {
    const value = Number(document.querySelector('.input').value);
    if (value > 0 && value <= 10) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url+value, true);
        xhr.onload = function() {
            if (xhr.status != 200) {
                console.log('Статус ответа: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);
                if (callback) {
                    callback(result)
                }
            }
        }
        xhr.onerror = function() {
            console.log(`Ошибка! Статус ответа: ${xhr.status}`);
        };
        xhr.send();
    } else {
        callback(false);
    }

};
const btnNode = document.querySelector('.j-btn-request');
const resultNode = document.querySelector('.j-result');
function displayResult(apiData) {
    
    if (apiData !== false) {
        let cards = '';
        apiData.forEach(item => {
            const cardBlock = `
                <div class="card">
                    <img src="${item.download_url}" class="card-image"/>
                    <p>${item.author}</p>
                </div>`
            cards = cards + cardBlock;
            resultNode.innerHTML = cards;
        });
    } else {
        resultNode.innerHTML = 'Число вне диапазона!';
    }
}

btnNode.addEventListener('click', () => {
    useRequest('https://picsum.photos/v2/list/?limit=', displayResult);
})
