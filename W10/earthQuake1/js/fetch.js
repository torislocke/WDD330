fetch(url + location + '&appid=' + apiKey).then(function (response) {
    return (response.json());
}).then(function (response) {
    updateUISuccess(response);
}).catch(function () {
    updateUIFailure();
});