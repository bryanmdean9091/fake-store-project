

 export  function getCategory(cat) {
    return   fetch(`https://fakestoreapi.com/products/category/${cat}`)
    // .then(res=>res.json())
    // .then(json=>console.log(json))
 };
  