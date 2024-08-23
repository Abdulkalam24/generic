document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('autocomplete');
    const suggestionsContainer = document.getElementById('suggestions');

    const items = [
        "Angelfish",
        "Bat",
        "Cat",
        "Dolphin",
        "Eagle",
        "Forg",
        "Giraffe",
        "King cobra",
        "Lion",
        "Monkey",
        "Owl",
        "Peacock ",
        "Scarab Beetle",
        "Water Buffalo"
    ];

    input.addEventListener('input', function () {
        const query = input.value.toLowerCase();
        suggestionsContainer.innerHTML = '';

        if (query.length > 0) {
            const filteredItems = items.filter(item => item.toLowerCase().startsWith(query));

            filteredItems.forEach(item => {
                const suggestion = document.createElement('div');
                suggestion.classList.add('autocomplete-suggestion');
                suggestion.textContent = item;

                suggestion.addEventListener('click', function () {
                    input.value = item;
                    suggestionsContainer.innerHTML = '';
                });

                suggestionsContainer.appendChild(suggestion);
            });
        }
    });

    document.addEventListener('click', function (e) {
        if (e.target !== input) {
            suggestionsContainer.innerHTML = '';
        }
    });
});
