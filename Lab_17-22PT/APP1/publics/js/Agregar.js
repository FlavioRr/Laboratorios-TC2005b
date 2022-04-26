
let parameters = []


const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

(function load(){
    const $btnAdd = document.getElementById("btnAdd")
    const $form = document.getElementById("form")
    const templateElement = () => {
        return (`
            <input required><span class="barra"></span>
            <label for="">Pregunta </label>
        `)
    }
    $btnAdd.addEventListener("click", (event) => {
        const $div = document.createElement("div")
        $div.classList.add("grupo")
        $div.innerHTML = templateElement()
        $form.insertBefore($div, $form.lastChild)
    })

})()
