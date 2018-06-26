$(document).ready(function() {
    $('.sidenav').sidenav();

    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": null
        },
    });
});