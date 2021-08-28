$(document).on("click", ".editBtn", function (e){
    if ($(e.target).hasClass("editBtn")) {
        let id = e.target.id;
        console.log(id);
        fetch("http://localhost:8080/api/users/" + id)
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
                    <h3>Edit user</h3>
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
                    
                    <label for="password">Enter password: </label>
                    <input class="form-control update-password" type="password" name="password" id="password">

                    <label for="roles">Enter role: </label>
                    <select class="form-control" size="2" name="roles" id="roles">
                        <option selected>USER</option>
                        <option>ADMIN</option>
                    </select>
                </div>
            </div>

            <div class="update-down">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-secondary me-md-2 update-close" type="button">Close</button>
                    <button class="btn btn-primary update-edit" type="submit">Edit</button>
                </div>
            </div>
        </div>
    </div>
    `
    document.querySelector(".update").innerHTML = test;
    $(".update").show();
})
$(document).on("click", ".update-edit", function (){
    let roles = $("#roles").val();
    const data = {
        "id": $("#id").val(),
        "name": $("#name").val(),
        "age": $("#age").val(),
        "email": $("#email").val(),
        "password": $("#password").val(),
        "roles": getRol(roles)
    }
    sendData("http://localhost:8080/api/users", JSON.stringify(data), "PUT");
    $(".update").hide();
})