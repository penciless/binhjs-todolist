var input = this.el('input');

var inputbox = input({ type: 'text', placeholder: 'Enter to-do item' });

inputbox.on('keypress', function (event) {
    if (event.key === "Enter") {
        inputbox.does('submit', inputbox.element.value);
    }
});

return inputbox;