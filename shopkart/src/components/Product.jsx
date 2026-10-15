import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Product() {
    const [products, setProducts] = useState(null)

    const [searchParams, setSearchParams]=useSearchParams()
    console.log(searchParams.get('category'))

    const fetchProducts = async () => {
        try {

            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json()
            setProducts(data);

        } catch (error) {

        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return <>

    <button className="btn btn-primary" onClick={()=>setSearchParams({category:'electronics'})}>Electronics</button>

    <button className="btn btn-primary" onClick={()=>setSearchParams({category:'jewelery'})}>Jewelery</button>

        {products ? <>

            <div class="row row-cols-1 row-cols-md-4 g-4">

                {products
                .filter(p=>searchParams.get('category')? searchParams.get('category')==p.category :true)
                .map((p) => <div class="col">
                    <div class="card">
                        <img src={p.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{p.id} {p.title}</h5>
                                <p class="card-text">{p.description}</p>
                                <p class="card-text">{p.category}</p>
                                <Link className="btn btn-primary" to={`/products/detail/${p.id}`}>View Detail</Link>
                            </div>
                    </div>
                </div>)}

            </div>


        </> : <p>Loading........................</p>}
    </>;
}


export default Product;