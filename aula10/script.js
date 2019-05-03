 const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const updateProfile = () => {
  // https://reqres.in/api/users/${id}
  // document.getElementById("nome").innerHTML = `${nome} ${sobrenome}`;
  // document.getElementById("avatar").src = avatar;
}
