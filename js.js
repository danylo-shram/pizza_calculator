document.addEventListener("DOMContentLoaded", function() {
    const pizzaType = document.getElementById('pizzaType');
    const diameter = document.getElementById('diameter');
    const diameterValue = document.getElementById('diameterValue');
    const ingredients = document.getElementById('ingredients');
    const pizzaImg = document.getElementById('pizzaImg');

    const recipes = {
        paparoni: {
            image: "папероні.png",
            ingredients: {
                "Томатна паста": 120,
                "Моцарела": 30,
                "Салямі": 120,
                "Сир твердий": 30
            }
        },
        '4cheeses': {
            image: "4сира.png",
            ingredients: {
                "Томатна паста або білий соус": 120,
                "Моцарела": 30,
                "Пармезан": 30,
                "Горгонзола": 30,
                "Твердий сир": 30
            }
        },
        hawaiian: {
            image: "гавайська.png",
            ingredients: {
                "Томатна паста": 120,
                "Моцарела": 60,
                "Мясо курки": 100,
                "Кусочки ананасу": 90
            }
        }
    };

    function updateIngredients() {
        const type = pizzaType.value;
        const sizeFactor = (Math.pow(parseInt(diameter.value), 2) / Math.pow(30, 2));
        let html = '';

        for (const ingredient in recipes[type].ingredients) {
            const amount = recipes[type].ingredients[ingredient] * sizeFactor;
            html += `<p>${ingredient}: ${Math.round(amount)} г</p>`;
        }
        
        ingredients.innerHTML = html;
        pizzaImg.src = recipes[type].image;
    }

    pizzaType.addEventListener('change', updateIngredients);
    diameter.addEventListener('input', function() {
        diameterValue.textContent = diameter.value;
        updateIngredients();
    });

    updateIngredients();
});
