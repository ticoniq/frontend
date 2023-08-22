import {useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import sanitizeHtml from 'sanitize-html';
import { fetchSingleProduct } from '../Redux/product/productSlice';
import Menu from '../components/Menu';
import Body from "../components/Body";

function ProductView() {
  const dispatch = useDispatch();
  const productId = useParams();
  const { selectedProductData } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchSingleProduct(productId.uuid));
  }, [dispatch, productId.uuid]);

  function extractTextFromHTML(inputHtml) {
    const sanitizedHtml = sanitizeHtml(inputHtml, {
      allowedTags: [], // Remove all tags
      allowedAttributes: {}, // Remove all attributes
    });
    return sanitizedHtml;
  }
  
  return (
    <section className="flex w-full gap-12">
      {selectedProductData && (
        <>
          <div className="hidden space-y-4 md:w-2/12 md:block">
            <Menu user={selectedProductData.user}  />
          </div>
          <div className="w-full md:w-10/12">
            <Body 
              id={selectedProductData.id}
              description={extractTextFromHTML(selectedProductData.description)} 
              image={selectedProductData.picture} 
              video={selectedProductData.video}
              user={selectedProductData.user}  
              trl={selectedProductData.trl.name} 
              businessModels={selectedProductData.businessModels} 
              categories={selectedProductData.categories} 
              company={selectedProductData.company} 
              type={selectedProductData.type} 
              investmentEffort={selectedProductData.investmentEffort} 
            />
          </div>
        </>
      )}
    </section>
  );
}

export default ProductView;
