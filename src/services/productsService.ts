import api from "../api/api.json";
import { Product } from "../type/product-types";

const getProduct = () => {
  const res = api.sneakers;
  return res;
};

const getProductById = (id: number) => {
  const res = api.sneakers.find((item) => item.id === id);
  return res;
};

const getNewestProduct = (products: Product[]) => {
  const releaseDateArray = products.map((item) => {
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

  return newestProductDate;
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

const getProductByGender = (shoesGender: string[], product: Product[]) => {
  const shoesByCategory = product;
  let dataFilter: any = [];

  shoesByCategory.forEach((item) => {
    shoesGender.forEach((i) => {
      if (item.gender.includes(i)) {
        dataFilter.push(item);
      }
    });
  });

  if (!shoesGender.length) {
    dataFilter = shoesByCategory;
  }
  return dataFilter;
};

const getProductByStatus = (status: string) => {
  const shoesByCategory = api.sneakers.filter((item) => item.status === status);
  return shoesByCategory;
};

const getProductByYearAsc = (product: Product[]) => {
  const sortedProduct = product.sort((a, b) => {
    if (a.release_year === null) return 1;
    if (b.release_year === null) return -1;
    return b.release_year - a.release_year;
  });

  return sortedProduct;
};

const sortProductsByPrice = (products: Product[], sortAscending: boolean) => {
  return products.sort((a, b) => {
    if (a.retail_price_cents === null) return 1;
    if (b.retail_price_cents === null) return -1;

    return sortAscending
      ? a.retail_price_cents - b.retail_price_cents
      : b.retail_price_cents - a.retail_price_cents;
  });
};

const filterProductByHasStock = (hasStock: boolean, product: Product[]) => {
  if (hasStock) {
    const result = product.filter((item) => item.has_stock === true);
    return result;
  } else {
    const result = product;
    return result;
  }
};

const getProductColors = () => {
  const allColorsAvailable = api.sneakers.map((item) => item.color);
  const uniqueColors = allColorsAvailable.filter(
    (color, index) => allColorsAvailable.indexOf(color) === index
  );
  return uniqueColors;
};

const getProductByColor = (products: Product[], shoesColor: string) => {
  const rs = products.filter((item) => item.color === shoesColor);
  return rs;
};

export default {
  getProduct,
  getProductById,
  getNewestProduct,
  getBlackSpotlight,
  getProductByCategory,
  getProductByStatus,
  getProductByGender,
  getProductByYearAsc,
  sortProductsByPrice,
  filterProductByHasStock,
  getProductColors,
  getProductByColor,
};
