var todoList = document.getElementById('todoList');
var input = document.getElementById('input');

function addItem() {
    if (input.value == "") {
        alert("Please fill the input field")
    } else {
        var li = document.createElement('li');
        var liText = document.createTextNode(input.value)
        li.appendChild(liText)
        li.setAttribute("class", "lee")


        //DELETE BTN
        var delBtn = document.createElement("button");
        var delText = document.createTextNode("");
        delBtn.setAttribute("onclick", "delItem(this)")
        delBtn.setAttribute("class", "cut-btn")
        delBtn.innerHTML = '<img class="js-cross-btn" src = "criss-cross.png" />'
        delBtn.appendChild(delText)


        //EDIT BTN
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("EDIT");
        editBtn.appendChild(editText);
        editBtn.setAttribute("onclick", "editItem(this)")
        editBtn.setAttribute("class", "edit-btn")
        editBtn.innerHTML = '<img class="js-edit-btn" src = "pencil.png" />'




        li.appendChild(delBtn);
        li.appendChild(editBtn);

        todoList.appendChild(li)

        input.value = "";
    }
    // console.log(li)
}


function deleteAll() {
    todoList.innerHTML = ""
}

function delItem(btn) {
    btn.parentNode.remove()
}

function editItem(editBtn) {
    var a = prompt("Enter the edited text")
    editBtn.parentNode.firstChild.nodeValue = a;
}