
function getdata()
{
  return new Promise((resolve,reject)=>
  {
    resolve("sakshipatil");
  });
}

getdata()
.then(data=>
{
  console.log(data);
}
)
.catch(error =>
  {
    console.log(error);
  })