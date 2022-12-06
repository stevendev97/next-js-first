import React from 'react';
import {
    BaseCSS,
    GridThemeProvider,
    Container,
    Row,
    Col
} from "styled-bootstrap-grid";
import {ProductImg, Price, Button} from '../../componentsType/detailStyle';
import Select from "react-select";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {useRouter} from 'next/router';
import type {RootState} from '../../redux/store';
import { connect } from "react-redux";
import {useShoppingCart} from '../../contexts/cartContext';

 
const customGrid = {
    breakpoints: {
      xl: 1400
    },
    container: {
      maxWidth: {
        xl: 1340
      }
    }
};
function getProductId(str: string|string[]|undefined){
   if(typeof str === "string"){
    return parseInt(str);
   }
}

const sizes = [{ value: "XS", label: "XS" },
{ value: "S", label: "S" },
{ value: "M", label: "M" },
{ value: "L", label: "L" },
{ value: "XL", label: "XL" },
{ value: "XXL", label: "XXL" }];
const colors = [
    { value: "Black", label: "Black" },
    { value: "White", label: "White" },
    { value: "Yellow", label: "Yellow" },
    { value: "Purple", label: "Purple" }];


type props = {
    all_items: {id:number, image: string, label: string, title:string, price:string}[],
}
// {id, title, image, price} = props
// using redux
// {all_items}: props
// const items = useSelector((state: RootState) => state.products.all_products);
// console.log(items);

function ProductDetail({all_items}: props){
const router = useRouter();
const {increaseQuantity} = useShoppingCart()
const productId = getProductId(router.query.productId);
const {id, image, label, title, price} = all_items.filter((item)=>{return item.id === productId})[0]
return (<div className="product_detail_wrapper">
<GridThemeProvider gridTheme={customGrid}>
{/* <BaseCSS css={customCSS}> */}
    <Container>
        <Row>
            <Col>
              <h1>{title}</h1>
              {/* <p>
                by{" "}
                <a href="https://unsplash.com/@whoisbenjamin">@whoisbenjamin</a>
              </p> */}
            </Col>
        </Row>
        <Row>
            <Col
              md={7}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start"
              }}
            >
              <ProductImg
                src={image}
                alt={title}
              />
            </Col>
        
        <Col md={5}>
              <Price price={price} />

              <label htmlFor="sizes">Select size</label>
              <Select
                name="sizes"
                defaultValue={sizes[0]}
                options={sizes}
                styles={{
                  control: styles => ({
                    ...styles,
                    marginBottom: "1.5rem",
                    height: "2.25rem"
                  })
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: 'grey',
                    primary: 'black',
                  },
                })}
              />

              <label htmlFor="colors">Select color</label>
              <Select
                name="colors"
                defaultValue={colors[0]}
                options={colors}
                styles={{
                  control: styles => ({
                    ...styles,
                    marginBottom: "1.5rem",
                    height: "2.25rem"
                  })
                }}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: 'grey',
                    primary: 'black',
                  },
                })}
              />
              <div onClick={()=>{increaseQuantity(id, title, price, image)}} 
              style={{display: "inline-block", justifyContent: "center", width:"100%", height: "2.25rem", marginTop: "1.5rem"}}>
                <Button
                  label="Add to cart"
                  icon={<ShoppingBasketIcon />}
                />
              </div>

              <h2>Product details</h2>
              <div>
                <strong>Best for : </strong>Everyday runs, roads, soft landings
              </div>
              <div style={{ marginBottom: "1.5rem" }}>
                <strong>Shipping and Return : </strong>Free shipping on orders over $75, 
                and our 30 days, no questions asked return policy.
              </div>
              <p>
                <em>
                Take casual runs in stride with the original Tree Dasher, 
                a delightfully breezy performance shoe. Made with eucalyptus fiber, 
                it breathes and flexes with your every step. Good for your performance. 
                Good for the planet. The Tree Dasher is a true win-win.
                </em>
              </p>
            </Col>
            </Row>
    </Container>
{/* </BaseCSS> */}
</GridThemeProvider>
</div>);
};

const mapStateToProps = (state: RootState) => ({
    all_items: state.products.all_products,
})

export default connect(mapStateToProps)(ProductDetail);