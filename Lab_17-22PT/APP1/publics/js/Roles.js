const path = require('path');
const user = require('../models/model_login');
const bcrypt = require('bcryptjs');
const { request } = require('http');


let parameters = []


const addJsonElement = json => {
    parameters.push(json)
    return parameters.length - 1
}

(function load(){
    if(user.ID_rol == 1){
        const $NAV = document.getElementById("nav-mobile")
        const templateElement = () => {
            return (`
<<<<<<< HEAD
                <li>
                <a href="GenTem" class="btn-floating">
                    Generar Template<i class="material-icons">add_circle</i>
                </a>
                </li>
                <li>
                    <a href="ModTem" class="btn-floating">
                        Modificar Template<i class="material-icons">edit</i>
                    </a>
                </li>
=======
                
>>>>>>> Int-RBAC
            `)
        }

        const $li = document.createElement("li")
<<<<<<< HEAD
        $li.classList.add("grupo")
=======
>>>>>>> Int-RBAC
        $li.innerHTML = templateElement()
        $form.insertBefore($li, $NAV.lastChild)
    }

})()