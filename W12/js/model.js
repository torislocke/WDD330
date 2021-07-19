// create an element
const createNode = (elem) => {
  return document.createElement(elem);
};

// append an element to parent
const appendNode = (parent, elem) => {
  parent.appendChild(elem);
};

// List Element
const ul = document.querySelector("#users");

// GitHub API URL
const url = "https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=0KQzSZtWF3r8nyuP6lctdEMFxxB90GxKbNmFenot";

// make the API call
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    // iterate over users
    data.map((user) => {
      // create the elements
      let li = createNode("li"),
        img = createNode("img"),
        span = createNode("span");
      img.src = user.avatar_url;
      span.innerText = user.login;
      // append all elements
      appendNode(li, img);
      appendNode(li, span);
        appendNode(ul, li);
        console.log(user);
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
