async function getdata() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(455);
    }, 3500);
  });
}
async function main() {
  console.log('Loading modules');
  console.log('Do something else');
  console.log('Load data');

  let data = await getdata();
  // data.then((v) => {
  //   console.log(data);
  // });

  //async await

  console.log(data);
  console.log('process data');
}
main();
