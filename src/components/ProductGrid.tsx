import { ProductType } from '@/types';
import ProductCard from './Product';

export default function ProductGrid() {
    const productList: ProductType[] = [
        {
            title: 'table',
            price: 100,
            description: 'a table with antique wood work',
            imgLink: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png',
            quantity: 2,
        },
        {
            title: 'chair',
            price: 50,
            description: 'a chair with full ergonomic support',
            imgLink: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png',
            quantity: 1,
        },
        {
            title: 'bed',
            price: 200,
            description: 'a bed with a memory foam mattress',
            imgLink:
                'https://st3.depositphotos.com/1014680/16209/i/1600/depositphotos_162094036-stock-photo-used-wooden-table-isolated.jpg',
            quantity: 0,
        },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center m-2 p-2  '>
            {productList.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    );
}
