$(document).ready(function() {
    $('.sidenav').sidenav();

    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": null
        },
    });

    let data = {
        hiddenFields: [
            {
                label: 'Test Input',
                value: 'testInput',
                input: true
            },
            {
                label: 'Test Autocomplete',
                value: 'testAutocomplete',
                input: true,
                autocomplete: true,
                values: {
                    "qqqq": null,
                    "wwww": null,
                    "eeee": null,
                    "rrrr": null,
                    "tttt": null,
                    "yyyy": null,
                    "uuuu": null,
                    "iiii": null,
                    "oooo": null
                }
            },
            {
                label: 'Test Textarea',
                value: 'testTextarea',
                textarea: true
            }
        ],
        hiddenFieldsVisible: []
    }

    let controller = {
        makeVisible: function(e, model) {
            let fieldInArray = model.data.hiddenFields.splice(model.index, 1);
            let field = fieldInArray[0];
            model.data.hiddenFieldsVisible.splice(field.index, 0, field);

            if (field.autocomplete) {
                $('input.autocomplete#' + field.value).autocomplete({
                    data: field.values
                });
            }
        },
        makeHidden: function(e, model) {
            let fieldInArray = model.data.hiddenFieldsVisible.splice(model.index, 1);
            let field = fieldInArray[0];
            model.data.hiddenFields.splice(field.index, 0, field);
        }
    }

    rivets.formatters.notIncludes = function(array, value) {
        return !array.includes(value);
    }

    rivets.formatters.set = function(object, name, value) {
        object[name] = value;

        return;
    }

    data.hiddenFields.forEach(function(field, index) {
        field.index = index;
    });

    rivets.bind(document.querySelector('#qa-ext-app'), {
        data: data,
        controller: controller
    });
});