var nome = "maria";

//exemplo de promise
const minhaPromessa = new Promise((resolve, reject) => {
  if (nome === "maria") {
    resolve("Nome coincide com o nome esperado!");
  }
  reject("nome digitado foi errado!");
})
console.log(minhaPromessa);