async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
console.log(t);
sleep(100).then(() => console.log(Date.now() - t)); // 100
