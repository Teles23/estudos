let primeiro = (complemento) => {
  return "ola " + complemento;
};

let segundo = () => {
  return "galera!";
};

let saudacao = primeiro(segundo());
console.log(saudacao);
