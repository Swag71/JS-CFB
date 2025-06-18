const endpoint='https://0b68512f-b7ac-4a9a-ae4b-a3925f5ab47c-00-29x91ncigszxg.riker.replit.dev/'
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
  console.log(dados);
})
