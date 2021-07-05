// const filter = (option, array) => {
//   if (inputProduct && inputCity) {
//     const test = () => {
//       let result = copyProductsFromRedux.filter((el) =>
//         el.title.toLocaleLowerCase().includes(inputProduct.toLocaleLowerCase())
//       );
//       const second = result.filter((el) => el.city.toLocaleLowerCase().includes(inputCity.toLocaleLowerCase()));
//       return second;
//     };

//     setFilteredProducts(test());
//   }

//   if (inputProduct !== "" && inputCity === "") {
//     console.log("product");
//     setFilteredProducts(
//       copyProductsFromRedux.filter((el) => el.title.toLocaleLowerCase().includes(inputProduct.toLocaleLowerCase()))
//     );
//   }

//   if (inputCity !== "" && inputProduct === "") {
//     console.log("city");
//     setFilteredProducts(
//       copyProductsFromRedux.filter((el) => el.city.toLocaleLowerCase().includes(inputCity.toLocaleLowerCase()))
//     );
//   }
// };
