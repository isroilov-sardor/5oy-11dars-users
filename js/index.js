window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
    }, 2000);
});

function createCard(value) {
    return `
    <div class="block">
                    <div class="block-same">
                        <div class="block-name">${value.navElement}</div>
                        <div class="block-id">id: ${value.id}</div>
                    </div>
                    <div class="block-username">username: ${value.username}</div>
                    <div class="block-email">email: ${value.email}</div>
                    <div class="block-phone">phone: ${value.phone}</div>
                    <div class="block-website">site: ${value.website}</div>
                </div>
    `;
}
const wrapper = document.querySelector(".end-wrapers");
const button = document.querySelector("#end-btn");
const delButton = document.querySelector("#del-all");

button &&
    button.addEventListener("click", () => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
        })
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                }
                if (response.status == 404) {
                    throw new Error("API not working or something happen");
                }
            })
            .then((data) => {
                data.forEach((element) => {
                    const data = createCard(element);
                    wrapper.innerHTML += data;
                });
            })
            .catch((err) => {
                console.log(err);
            });
    });

delButton &&
    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        wrapper.innerHTML = "";
    });
const hoveredElement = document.querySelector("#head-link");
const navElement = document.querySelector(".efect");

hoveredElement.addEventListener("mouseenter", function (event) {
    navElement.style.display = "block";
});

hoveredElement.addEventListener("mouseleave", () => {
    navElement.style.display = "none";
});

const element = document.querySelector(".mid-desc");
const hovElement = document.querySelector(".mid-thing");

element &&
    element.addEventListener("mouseenter", function (event) {
        event.preventDefault();
        hovElement.style.display = "block";
    });
element &&
    element.addEventListener("mouseleave", function (event) {
        event.preventDefault();
        hovElement.style.display = "none";
    });
