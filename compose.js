/**Use compose to apply multiple functions to the same data arguments*/


/** Initial object value */
const customer = {
    name: "John",
    cart: [],
    purchases: []
  }
  
  /** Compose function with unknown number of arguments */
  const compose = (f, g) => (...arg) => f(g(...arg))
  /** Use reduce to apply  compose to all given functions */
  const purchasesItems = (...fn) => fn.reduce(compose)
  
  /** Use concat to do not mutate the state of the user cart, but to create new object instead
   * Use Object.assign to make a copy of the customer object (called user) with updated cart value
  */
  function addItemToCard(user, item) {
    const { cart } = user // cart = cart.user
    const updatedCart = cart.concat(item)
    return Object.assign({}, user, {cart: updatedCart})
  }
  
  /** Iterate trough each item in the card and add the tax to the price item from the card
   * Store the value in a new card details in a new variable
   * Create a new object with the new data
  */
  function applyTaxToItems(user){
    const {cart} = user
    const taxRate = 0.3
    const updatedCart = cart.map(item => {
      return {
        name: item.name,
        price: item.price * taxRate + item.price
      }
    })
    return Object.assign({}, user, {cart: updatedCart})
  }
  
  /**Use concat to add the new purchase to an previous purchases */
  function buyItems(user){
    const {cart} = user
    const { purchases } = user
    const updatedPurchases = purchases.concat(cart)
    return Object.assign({}, user, {purchases: updatedPurchases})
  }
  
  function emptyUserCart(user){
    return Object.assign({}, user, {cart: []})
  }
  
  /** Purchase items 
   * Functions are applied from the bottom (right) to top (left)
   * Takes as argument, initial object customer and an object with new data
  */
  purchasesItems(
    emptyUserCart,
    buyItems,
    applyTaxToItems,
    addItemToCard
  ) (customer, {name: "laptop", price: 200})

  