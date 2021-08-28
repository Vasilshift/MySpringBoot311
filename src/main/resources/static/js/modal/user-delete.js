$(document).on("click", ".deleteBtn", function (e){
    if ($(e.target).hasClass("deleteBtn")) {
        let name = parseInt(e.target.name);
        console.log(name)
        fetch("http://localhost:8080/api/users/" + name)
            .then(res => res.json())
            .then(data => {
                $("#id").val(data.id);
                $("#name").val(data.name);
                $("#age").val(data.age);
                $("#email").val(data.email);
            })
    }
    const test = `
        <div class="update-body">
            <div class="row update-head">
                <div class="col update-head-left">
                    <h3>Delete user</h3>
                </div>
                <div class="col update-head-right" style="text-align: right">
                    <button type="button" class="btn-close update-close" aria-label="Close"></button>
                </div>
            </div>
            <div class="update-content">
                <div class="form-group">
                    <label for="id">ID</label>
                    <input class="form-control" readonly type="number" name="id" id="id" value=""/>

                    <label for="name">Enter name: </label>
                    <input class="form-control" type="text" name="name" id="name" value=""/>

                    <label for="age">Enter age: </label>
                    <input class="form-control" type="text" name="age" id="age" value=""/>

                    <label for="email">Enter email: </label>
                    <input class="form-control" type="text" name="email" id="email" value=""/>

                    <label for="roles">Enter role: </label>
                    <select class="form-control" size="2" name="roles" id="roles">
                        <option disabled>USER</option>
                        <option disabled>ADMIN</option>
                    </select>
                </div>
            </div>

            <div class="update-down">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-secondary me-md-2 update-close" type="button">Close</button>
                    <button type="submit" class="btn btn-danger delete-user">Delete</button>
                </div>
            </div>
        </div>
    </div>
    `
    document.querySelector(".update").innerHTML = test;
    $(".update").show();
})

$(document).on("click", ".delete-user", function (){
    const data = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "age": $("#age").val(),
        "email": $("#email").val(),
    }
    sendData("http://localhost:8080/api/users", JSON.stringify(data), "DELETE");
    $(".update").hide();
})