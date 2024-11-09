import api from "../api/api.json";

const getProduct = () => {
  const res = api.sneakers;
  return res;
};


const getProductById = (id: number) => {
  const res = api.sneakers.find((item) => item.id === id);
  return res;
};

const getNewestProduct = () => {
  const releaseDateArray = api.sneakers.map((item) => {
    if (item.release_date) {
      const timestamp = Date.parse(item.release_date);
      return { ...item, release_date: timestamp };
    }
  });

  const sortedTime = releaseDateArray.sort(
    (a: any, b: any) => b.release_date - a.release_date
  );
  const newestProductDate = sortedTime.map((item: any) => {
    if (item) {
      const rs = new Date(item.release_date).toDateString();
      const sortedProductByReleaseDate = { ...item, release_date: rs };
      return sortedProductByReleaseDate;
    }
  });

  return newestProductDate.slice(0, 10);
};

const getBlackSpotlight = () => {
  const blackSpotlightShoes = api.sneakers.filter(
    (item) => item.color === "Black"
  );
  return blackSpotlightShoes;
};

const getProductByCategory = (shoesCategory: string[]) => {
  const shoesByCategory = api.sneakers.filter((item) =>
    item.category.some((category) => shoesCategory.includes(category))
  );
  return shoesByCategory;
};

const getProductByGender = (shoesGender: string[]) => {
  const shoesByCategory = api.sneakers;

  let dataFilter: any = []
  shoesByCategory.forEach(item => {
    shoesGender.forEach(i => {
      if(item.gender.includes(i)){
        dataFilter.push(item)
      }
    })
  })

  if(!shoesGender.length){
    dataFilter = shoesByCategory
  }
  return dataFilter
};

const getProductByStatus = (status: string) => {
  const shoesByCategory = api.sneakers.filter((item) => item.status === status);
  return shoesByCategory;
};

export default {
  getProduct,
  getProductById,
  getNewestProduct,
  getBlackSpotlight,
  getProductByCategory,
  getProductByStatus,
  getProductByGender,
};
