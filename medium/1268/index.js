/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  let response = [];
  let searchInput = "";
  products.sort();
  for (let character of searchWord) {
    searchInput += character;
    response.push(
      products.reduce((searchResult, product) => {
        if (product.startsWith(searchInput) && searchResult.length < 3) {
          searchResult.push(product);
        }
        return searchResult;
      }, [])
    );
  }
  return response;
};

const products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
  searchWord = "mouse";

// const products = ["havana"],
//   searchWord = "havana";
console.log(suggestedProducts(products, searchWord));
