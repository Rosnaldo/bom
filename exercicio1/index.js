const fs = require('fs');

fs.readFile('arquivo.txt', (_, data) => { 
  total = 0;
  const arr = data.toString().split('\n');
  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
  }
  console.log(total)
}) 