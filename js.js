document.addEventListener("DOMContentLoaded", function() {
    const diameterRange = document.getElementById("diameter");
    const diameterValue = document.getElementById("diameter-value");
    const toppingSelect = document.getElementById("topping");
    const pizzaImg = document.getElementById("pizza-img");
    const ingredientsList = document.getElementById("ingredients-list");
    const calculateButton = document.getElementById("calculate-button");

    diameterRange.addEventListener("input", function() {
        diameterValue.textContent = diameterRange.value + " см";
    });

    calculateButton.addEventListener("click", function() {
        const diameter = parseInt(diameterRange.value);
        const topping = toppingSelect.value;
        let ingredientCount = 0;

        switch (topping) {
            case "pepperoni":
                ingredientCount = calculatePepperoniIngredients(diameter);
                pizzaImg.src = "папероні.png";
                break;
            case "four-cheese":
                ingredientCount = calculateFourCheeseIngredients(diameter);
                pizzaImg.src = "4сира.png";
                break;
            case "hawaiian":
                ingredientCount = calculateHawaiianIngredients(diameter);
                pizzaImg.src = "гавайська.png";
                break;
        }

        displayIngredients(ingredientsList, ingredientCount);
    });

    function calculatePepperoniIngredients(diameter) {
        // Логіка розрахунку інгредієнтів для папероні
        // Ваш код розрахунку тут
        return 0; // Повертаємо кількість інгредієнтів
    }

    function calculateFourCheeseIngredients(diameter) {
        // Логіка розрахунку інгредієнтів для 4 сира
        // Ваш код розрахунку тут
        return 0; // Повертаємо кількість інгредієнтів
    }

    function calculateHawaiianIngredients(diameter) {
        // Логіка розрахунку інгредієнтів для Гавайської
        // Ваш код розрахунку тут
        return 0; // Повертаємо кількість інгредієнтів
    }

    function displayIngredients(ul, count) {
        ul.innerHTML = "";
        for (let i = 1; i <= count; i++) {
            const li = document.createElement("li");
            li.textContent = "Інгредієнт " + i;
            ul.appendChild(li);
        }
    }
});

