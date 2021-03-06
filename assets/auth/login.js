(function($) {
    $("#frm_login").submit(function(ev) {
        console.log($(this).serialize());
        $.ajax({
            url: "login/validate",
            type: "POST",
            data: $(this).serialize(),
            success: function(err) {
                var json = JSON.parse(err); //para convertir los datos a JSON
                // console.log(json); //para ver lo que regresa en consola
                window.location.replace(json.url);
            },
            statusCode: {
                400: function(xhr) {
                    $("#email > input").removeClass('is-invalid');
                    $("#password > input").removeClass('is-invalid');
                    var json = JSON.parse(xhr.responseText); //trae el json
                    if (json.email.length != 0) {
                        $("#email > div").html(json.email);
                        $("#email > input").addClass('is-invalid'); //apunta al input desde el id de su vista
                    }
                    if (json.password.length != 0) {
                        $("#password > div").html(json.password);
                        $("#password > input").addClass('is-invalid'); //apunta al input
                    }
                },
                401: function(xhr) {
                    var json = JSON.parse(xhr.responseText);
                    //console.log(json);
                    $("#alert").html('<div class="alert alert-danger" role="alert">' + json.msg + '</div>')
                }
            }
        });
        ev.preventDefault();
    });
})(jQuery)