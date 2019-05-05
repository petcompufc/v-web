 const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const updateProfile = () => {
  // https://reqres.in/api/users/${id}
  // document.getElementById("nome").innerHTML = `${nome} ${sobrenome}`;
  // document.getElementById("avatar").src = avatar;

  fetch('https://reqres.in/api/users/' + getRandomInt(1, 12))
  .then(response => response.json())
  .then(json => {
    let data = json.data;
    
    document.getElementById("nome")
    .innerHTML = `${data.first_name} ${data.last_name}`;

    document.getElementById("avatar")
    .src = data.avatar;
  })
}
