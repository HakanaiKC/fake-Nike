import axiosInstance from "../config/axiosClient";
import api from "../api/api.json"
const getProducts = async () => {
  const res = await axiosInstance.get("products");
  return res.data;
};

const getSingleProduct = async (id: string) => {
  const res = await axiosInstance.get("products/" + id);
  return res.data;
};

const getListProduct = () => {
  const res = api;
  return res
}

const getProductById = (id: number) => {
  const res = api.sneakers.find(item => item.id === id)
  return res
}

const getNewestProduct = () => {
  const releaseDateArray = api.sneakers.map(item => {
    if (item.release_date) {
      const timestamp = Date.parse(item.release_date)
      return ({ ...item, release_date: timestamp })
    }
  })

  const sortedTime = releaseDateArray.sort((a: any, b: any) => b.release_date - a.release_date)
  const newestProductDate = sortedTime.map((item: any) => {
    if (item) {
      const rs = new Date(item.release_date).toDateString()
      const sortedProductByReleaseDate = { ...item, release_date: rs }
      return sortedProductByReleaseDate
    }
  });

  return newestProductDate.slice(0, 10)
}

const getBlackSpotlight = () => {
  const blackSpotlightShoes = api.sneakers.filter((item) => item.color === "Black")
  return blackSpotlightShoes
}

const getProductByCategory=()=>{
  const shoesByCategory = api.sneakers.filter((item) => item.category.some(category=>category==="running") )
  console.log(shoesByCategory);
  return shoesByCategory
  
}

export default { getProducts, getSingleProduct, getListProduct, getProductById, getNewestProduct, getBlackSpotlight,getProductByCategory };
