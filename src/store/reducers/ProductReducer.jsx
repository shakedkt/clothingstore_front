const initalState = {
  products: [],
  currProduct: null,
  tagName: "ProductPreview",
  section: "",
  title: "all products",
};

export default function ProductReducer(state = initalState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.products };

    case "SET_PRODUCT":
      return { ...state, currProduct: action.product };

    case "RESEST_PRODUCT":
      return { ...state, currProduct: null };

    case "SET_SECTION":        
      return { ...state, section: action.section };

    case "SET_TITLE":
      return { ...state, title: action.title };
    default:
      return state;
  }
}
