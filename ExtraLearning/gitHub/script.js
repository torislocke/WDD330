const githubRequest = async (login) => {
    // wait for fetch from api
    let response = await fetch(
        `https://api.github.com/users/${login}`
    );
    // wait for response
    let json = await response.json();
    let summary = `${json.name}, ${json.company}`
    console.log(summary);
};
githubRequest('torislocke');