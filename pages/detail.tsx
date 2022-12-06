import React from 'react';
import {
    BaseCSS,
    GridThemeProvider,
    Container,
    Row,
    Col
} from "styled-bootstrap-grid";
import {ProductImg, Price, Button} from '../componentsType/detailStyle';
import Select from "react-select";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

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

const title = "Running Shoes";
const sizes = [{ value: "7", label: "7" },
{ value: "8", label: "8" },
{ value: "9", label: "9" },
{ value: "10", label: "10" }];
const colors = [
    { value: "Black", label: "Black" },
    { value: "White", label: "White" },
    { value: "Yellow", label: "Yellow" },
    { value: "Purple", label: "Purple" }];


export default function ProductDetail(){
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
                src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_853,b_rgb:f5f5f5/cms/6kgfUpOcNV92xLt7zyGjyx/16ec36c581cc8931c0878d43c2541748/TD1MOBS_SHOE_LEFT_GLOBAL_MENS_TREE_DASHERS_OBSIDIAN.png"
                alt={title}
              />
            </Col>
        
        <Col md={5}>
              <Price price="$12.99" />

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
              />

              <div style={{ display: "flex", justifyContent: "center" }}>
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