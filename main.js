$(document).ready(function() {
    $('#nome').mask('A', {
        translation: {
            'A': { pattern: /[a-zA-Z\s]/, recursive: true }
        }
    });

    $('#email').unmask().on('keypress', function (e) {
        var keyCode = e.keyCode || e.which;
        var char = String.fromCharCode(keyCode);

        if (char === '@' && this.value.indexOf('@') !== -1) {
            e.preventDefault();
        }
    });

    $('#telefone').mask('(00) 0000-0000');
});
