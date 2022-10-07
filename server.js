const http = require("http");
const port = 1337;
const server = http.createServer(function (req, res) {
  if (req.url === "/") return textoSimples(req, res);
  if (req.url === "json") return saidaJson(req, res);

  invalido(req, res);
});
function respostaDinamica(req, res) {
  const { input = "" } = querystring.parse(
    req.url.split("?").slice(1).join("")
  );
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      normal: input,
      maiusculo: input.toUpperCase(),
      qtd: input.length,
      invertida: input.split().slice(1).reverse().join(""),
    })
  );
}
function textoSimples(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Exemplo de texto simples");
}
function saidaJson(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({ text: "Exemplo de texto JSON", numbers: [1, 2, 3] })
  );
}

function invalido(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Nao encontrado");
}

server.listen(port);
console.log("servidor escutando a porta 1337, abra o local host");
