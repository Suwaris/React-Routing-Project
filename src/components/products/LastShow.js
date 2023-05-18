// import ProductItem from './ProductItem';
// import classes from './ProductList.module.css';

// function LastShow(props) {
//   // const receivedValue = props.propValue;
//   const receivedValue = props.propValue || 'Spa Ceylon';

//   console.log('Received value:', receivedValue);
  
//   const products = props.products;
//   console.log('Products:', props.products);


//   if (!products || products.length === 0) {
//     return <div></div>;
//   }
  

//   return (
//     <div className='row'>
//       <div className='column'>
//         <p className={classes.list}>
//           {receivedValue ? props.products
//                 .filter((product) =>
//                   product.title.toLowerCase().includes(receivedValue.toLowerCase())
//                 )
//                 .map((product) => (
//                   <ProductItem
//                     key={product.id}
//                     id={product.id}
//                     image={product.image}
//                     title={product.title}
//                     price={product.price}
//                     description={product.description}
//                   />
//                 ))
//             : props.products.map((product) => (
//                 <ProductItem
//                   key={product.id}
//                   id={product.id}
//                   image={product.image}
//                   title={product.title}
//                   price={product.price}
//                   description={product.description}
//                 />
//               ))}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default LastShow;



import ProductItem from './ProductItem';
import classes from './ProductList.module.css';

function LastShow(props) {
  const receivedValue = props.propValue;
  //const receivedValue = props.propValu || 'spa ceylon';

  console.log('Received value:', receivedValue);
  
  const products = props.products;
  console.log('Products:', props.products);

  if (!products || products.length === 0) {
    return <div>No products available.</div>;
  }
  

  const filteredProducts = receivedValue
    ? products.filter((product) =>
        product.title.toLowerCase().includes(receivedValue.toLowerCase())
      )
    : products;

  if (filteredProducts.length === 0) {
    return <div>No matching products found.</div>;
  }

  return (
    <div className='row'>
      <div className='column'>
        <p className={classes.list}>
          {filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
        </p>
      </div>
    </div>
  );
}

export default LastShow;

