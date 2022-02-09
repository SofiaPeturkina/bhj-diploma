/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest;
    const formData = new FormData();
    xhr.responseType = "json";
    let address = "?";

    for (key in options.data) {
        address += key + "=" + options.data[key] + "&";
    }
    
    address = address.slice(0, -1);
    for (key in options.data) {
        formData.append(key, options.data[key]);
    }
    
    try {
        if (options.method === "GET") {
            xhr.open(options.method, options.url + address);
            xhr.send();
        } else {
            xhr.open(options.method, options.url);
            xhr.send(formData);
        }
    } catch (err) {
        options.callback(err);
    }

    xhr.addEventListener("readystatechange", () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            let response = xhr.response;
            options.callback(null, response);
        }
    });
};
