const formData ={
    name: "Steve",
    email: "steve@steve.com",
};

function submitData() {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),})
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
          console.log(object);
          renderUser(object)
        })

    .catch(function (error) {
        const error1 = document.createElement('div');

        const errMessage = document.createElement('p');
          errMessage.textContent = //'message: Unauthorized Access, code: 401'
          `message: ${error.message}
          code: ${error.code}`
          
          error1.append(errMessage);
          document.body.appendChild(error1);
          
        });  
        
    

    }
        function renderUser(object){
            const user = document.createElement('div');
            
            const listUser = document.createElement('p');
            listUser.id = `${object.id}`;
            listUser.textContent = `
            Name: ${object.name}
            Email: ${object.email}
            ID:  ${object.id}
            `
            
            user.append(listUser);
            document.body.appendChild(user);
        }

    
