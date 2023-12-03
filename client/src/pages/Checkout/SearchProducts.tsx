import { useLocation } from "react-router-dom"
import ProductCardsContainer from "../../components/ProductCardsContainer"
import { Product } from "../../types/Product"
import ProductCard from "../../components/ProductCard"

const SearchProducts = () => {
    const location = useLocation()
    console.log('this is state in searchPage',location.state)
    const products:Product[]= location.state
    return(
        <>
           <ProductCardsContainer>
        {products.map((product) => {
          

          return (
            <ProductCard
              key={product.id}
              product={product}
             
            />
          );
        })}
      </ProductCardsContainer>
        </>
    )}
export default SearchProducts