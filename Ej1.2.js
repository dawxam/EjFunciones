const incrementar = (function() {
  let contador = 0;
  return function() {
    contador++;
    return contador;
  };
})();

incrementar();
incrementar();

console.log(contador);