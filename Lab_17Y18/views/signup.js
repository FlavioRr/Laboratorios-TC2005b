<%- include('includes/head.ejs') %> <
h1 id = "principal" > Este sitio es de capybaras < /h1> <
    h2 > Sitio administrativo de capybaras: < /h2> <
    form action = "/users/signup"
method = "POST" >
    <
    input type = "hidden"
name = "_csrf"
value = "<%= csrfToken %>" >
    <
    label
for = "nombre" > Nombre completo: < /label> <
    input type = "text"
id = "nombre"
name = "nombre" >
    <
    label
for = "username" > Nombre de usuario: < /label> <
    input type = "text"
id = "username"
name = "username" >
    <
    label
for = "password" > Contraseña: < /label> <
    input type = "password"
id = "password"
name = "password" >
    <
    br > < br >
    <
    input type = "submit"
value = "Enviar" >
    <
    /form> <
    br > < br >
    <
    a href = "/capybaras" > Regresar a la lista de capybaras < /a>
<%- include('includes/foot.ejs') %> < /br>