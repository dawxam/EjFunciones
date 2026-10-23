function sumarIterativo(arr) {
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }
  return suma;
}

function sumarRecursivo(arr, indice = 0) {
  if (indice === arr.length) {
    return 0;
  }
  return arr[indice] + sumarRecursivo(arr, indice + 1);
}

const numeros = [1, 2, 3, 4, 5];
console.log(sumarIterativo(numeros));
console.log(sumarRecursivo(numeros));