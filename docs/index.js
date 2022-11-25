fetch("https://zecanalizeapi.herokuapp.com/users")
  .then(Response => {
    if (!Response.ok) {
      throw new Error(`Tentativa falhou com o código: ${Response.status}`)
    }
    return Response.json()
  })
  .then(data => {
    console.log(data.count)
    console.log(data.products)
  })
  .catch(error => console.log(error))