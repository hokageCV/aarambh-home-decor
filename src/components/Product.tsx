import { ProductType } from '@/types';

type Props = {
    product: ProductType;
};

export default function ProductCard({ product }: Props) {
    return (
        <div className='card card-compact w-64 bg-cardBG shadow-xl text-primaryText'>
            <figure>
                <img src={product.imgLink} alt={product.title} className='h-52 w-52' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{product.title} </h2>
                <p>Rs {product.price}</p>
                <p>Quantity: {product.quantity || 'Out of Stock'}</p>
                <p className='text-sm text-secondaryText'>{product.description} </p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-primary'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}
