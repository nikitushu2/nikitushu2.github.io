const form = document.querySelector("#car-form");
const tblBody = document.querySelector("#table");
const notFound = document.querySelector("#notFound");

const search = document.querySelector("#search");
const searchResult = document.querySelector(".searchResult");

let cars = [];
let discountPrice;

class Car {
    constructor(plate, maker, model, owner, price, color, year) {
        this.plate = plate;
        this.maker = maker;
        this.model = model;
        this.owner = owner;
        this.price = price;
        this.color = color;
        this.year = year;
    }
}

function setDiscount(price) {
    let discountPrice = price - (price * 0.15);
    return discountPrice;
}

const displayMessage = (message, type = "success") => {
    const messageElement = document.querySelector("#message");
    messageElement.textContent = message;
    messageElement.className = type;
    setTimeout(() => {
        messageElement.textContent = "";
        messageElement.className = "";
    }, 3000);
};

function deleteCar(plate) {
    cars = cars.filter(car => car.plate !== plate);
    localStorage.setItem('cars', JSON.stringify(cars));
    tblBody.innerHTML = "";

    cars.forEach(car => {
        const carDetails = [
            car.plate,
            car.maker,
            car.model,
            car.owner,
            car.price,
            car.color,
            car.year,
            (2024 - car.year) > 10 ? setDiscount(car.price) : "No discount"
        ];
        generateTable(carDetails, car);
    });
    displayMessage("Car deleted successfully!");
}

function generateTable(arr, carObj) {

    for (let i = 0; i < 1; i++) {

        const row = document.createElement("tr");

        for (let j = 0; j < 8; j++) {

            const cell = document.createElement("td");
            const cellText = document.createTextNode(arr[j]);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        const deleteCell = document.createElement("td");
        const deleteButton = document.createElement("button");


        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            deleteCar(carObj.plate); // Delete car by plate
        });

        deleteButton.addEventListener("click", function () {
            row.remove();
            const index = cars.indexOf(carObj);

            if (index > -1) {
                cars.splice(index, 1);
            }
        });

        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);

        tblBody.appendChild(row);
    }

}



const loadCarsFromLocalStorage = () => {
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
        const parsedCars = JSON.parse(storedCars);
        parsedCars.forEach(carData => {
            const newCar = new Car(carData.plate, carData.maker, carData.model, carData.owner, carData.price, carData.color, carData.year);
            cars.push(newCar);
            const carDetails = [newCar.plate, newCar.maker, newCar.model, newCar.owner, newCar.price, newCar.color, newCar.year];

            const discount = (2024 - newCar.year) > 10 ? setDiscount(newCar.price) : "No discount";

            carDetails.push(discount);

            generateTable(carDetails, newCar);
        });
    }
};

function generateInfo(event) {
    event.preventDefault();

    let plate = document.querySelector("#plate").value.trim();
    let maker = document.querySelector("#maker").value.trim();
    let model = document.querySelector("#model").value.trim();
    let owner = document.querySelector("#owner").value.trim();
    let price = Number.parseInt(document.querySelector("#price").value.trim(), 10);
    let color = document.querySelector("#color").value.trim();
    let year = Number.parseInt(document.querySelector("#year").value.trim(), 10);

    discountPrice = setDiscount(price);

    try {
        if (plate === "" || maker === "" || model === "" || owner === "" || price === "" || color === "" || year === "" || price <= 0 || year < 1886 || year > 2024 || isNaN(year) || isNaN(price)) {
            throw new Error('Insert correct values!');
        }
        let newCar = new Car(plate, maker, model, owner, price, color, year);

        let objCar = { plate: newCar.plate, maker: newCar.maker, model: newCar.model, owner: newCar.owner, price: newCar.price, color: newCar.color, year: newCar.year, discountPrice: discountPrice };

        cars.push(objCar);

        localStorage.setItem('cars', JSON.stringify(cars))

        if ((2024 - year) > 10) {
            let input = [newCar.plate, newCar.maker, newCar.model, newCar.owner, newCar.price, newCar.color, newCar.year, discountPrice];
            generateTable(input, objCar);
        } else {
            let input = [newCar.plate, newCar.maker, newCar.model, newCar.owner, newCar.price, newCar.color, newCar.year, "No discount"];
            generateTable(input, objCar);
        }

        form.reset();
        displayMessage("Car added successfully!");
    } catch (error) {
        displayMessage(error.message, "error");
    }
}


form.addEventListener("submit", event => {
    generateInfo(event);
})

search.addEventListener("keyup", event => {
    searchResult.innerHTML = "";
    let found = false;

    if (search.value != "") {
        cars.forEach(car => {
            if (car['plate'] === event.currentTarget.value) {
                let input = [];
                Object.values(car).forEach(value => {
                    input.push(value)
                })
                searchResult.innerHTML = `
                    <p>Maker: ${car['maker']}</p>
                    <p>Model: ${car['model']}</p>
                    <p>Owner: ${car['owner']}</p>
                    <p>Price: $${car['price']}</p>
                    <p>Color: ${car['color']}</p>
                    <p>Year: ${car['year']}</p>
                    <p>Discounted price: $${car['discountPrice']}</p>`;
                found = true;
            }
        })
        if (!found) {
            searchResult.innerHTML = `<p>Not found...</p>`;
        }
    }
})

window.addEventListener('load', loadCarsFromLocalStorage);