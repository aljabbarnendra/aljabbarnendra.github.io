function ButtonTodolistOnClick() {
    let inputTodolist = document.getElementById("header-input-todolist");
    let value = inputTodolist.value;

    if (value !== "") {
        let content = document.getElementById("content");

        let contentRow = document.createElement("div");
        contentRow.className = "content-row";
        content.appendChild(contentRow);

        let contentRowData = document.createElement("div");
        contentRowData.className = "content-row-data";
        contentRowData.innerHTML = "" + value;
        contentRow.appendChild(contentRowData);

        let contentRowClose = document.createElement("div");
        contentRowClose.className = "content-row-close";
        contentRowClose.innerHTML = "X";
        contentRow.appendChild(contentRowClose);

        ButtonTodolistOnClickListener(contentRowClose);

        inputTodolist.value = "";
    }
}

function ButtonTodolistOnClickListener(element) {
    element.addEventListener("click", function () {
        element.parentNode.parentNode.removeChild(element.parentNode);
    });
}