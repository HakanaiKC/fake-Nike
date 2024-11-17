import { RootState } from '../../stores/cartStore';
import { useAppSelector } from '../../stores/hook';
import formatPrice from '../../utils/formatter';
import { Link } from 'react-router-dom';

const FavouritePage = () => {
    const favouriteProducts = useAppSelector((state: RootState) => state.favourites.value)

    return (
        <section>
            <main className="m-12">
                <h2 className="capitalize text-2xl pb-6">favourite</h2>
                <div className="grid grid-cols-3 gap-3 ml-10">
                    {favouriteProducts &&
                        favouriteProducts.map((product) => (
                            <Link to={`/product/${product.id}`} key={product.id}>
                                <div className="slide p-2">
                                    <img
                                        src={product.main_picture_url}
                                        alt={product.name}
                                        className="h-[350px] w-[350px] object-contain"
                                    />
                                    <h4 className="pt-3 font-bold">{product.name}</h4>
                                    <h5 className="text-gray-500">{product.details}</h5>
                                    <h3 className="pt-2 font-bold">
                                        {formatPrice(product.retail_price_cents)}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                </div>
            </main>
        </section>
    );
}

export default FavouritePage
