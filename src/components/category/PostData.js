export function PostData(type, userData) {
let BaseURL = type;
return new Promise((resolve, reject) =>{

  fetch(BaseURL,
  {
  method: 'POST',
  body:JSON.stringify(userData)
  })
  .then((response) => response.json()
  .then((res) => {
  resolve(res);
  }))
  .catch((error) => {
  reject(error);
  });
  });
}