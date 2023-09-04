const btn = document.querySelector(".j-btn");
const result = document.querySelector('.j-result');
let keyRequest = localStorage.getItem('keyRequest');

function useRequest(url) {
    return fetch(url)
        .then((responce) => {
            return responce.json();
        })
        .then((json) => {
            return json;
        })
        .catch(() => {
            console.log("Ошибка!");
        })
}

function displayResult(data) {
    if (data !== false) {
        let cards = '';
        data.forEach(element => {
            const cardBlock = `
            <div class="card">
                <img src="${element.download_url}" class="card-image"/>
                <p>${element.author}</p>
            </div>
            `
            cards += cardBlock;
        });
        result.innerHTML = cards;
    } else {
        result.innerHTML = 'Данных нет!';
    }
}

const dataChecking = async () => {
    let pageNum = Number(document.querySelector(".page-num").value);
    let limit = Number(document.querySelector(".limit").value);
    if ((pageNum >= 1 && pageNum <= 10) && (limit >= 1 && limit <= 10)) {
        let requestUrl = `https://picsum.photos/v2/list?page=${pageNum}&limit=${limit}`;
        let resultJson = await useRequest(requestUrl);
        localStorage.setItem('keyRequest',JSON.stringify(resultJson));
        displayResult(resultJson);
    } else {
        if ((pageNum < 1 || pageNum > 10) && (limit < 1 || limit > 10)) {
            result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        } else if (pageNum < 1 || pageNum > 10) {
            result.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        } else {
            result.innerHTML = 'Лимит вне диапазона от 1 до 10';
        }
    }
}

btn.addEventListener('click', dataChecking);

if (keyRequest != null || keyRequest != undefined) {
    displayResult(JSON.parse(keyRequest));
}