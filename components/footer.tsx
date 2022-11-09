import React from 'react';
import {css} from "styled-components";
import styled from "styled-components";
// type media = {
//     string: object,
// }

const media = {
    desktop: (args:any) => {
    return css`
    @media (min-width: 870px){
        ${args};
    }
    `
}};

//////
// media.desktop`
//     padding: 45px 80px;
//     display: flex;
//     flex-flow: row;
//     justify-content: space-between;
//     `

const NewFooter = styled.footer`
font-family: nunito-sans, sans-serif;
background-color: #212a2e;
color: #ffffff;
text-align: center;
${media.desktop`
  text-align:left;
`}
`;

const BottomBar = styled.div`
  margin:auto;
  max-width:1280px;
  padding: 40px 0;
  ${
    media.desktop`
    display: flex;
    justify-content: center;
    `
  }
`;

const MiddleBar = styled.div`
  margin:auto;
  max-width:1280px;
  padding: 35px 0;
  ${
    media.desktop`
    padding: 32px 80px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    `
  }
`;

const TopBar = styled.div`
  max-width: 1280px;
  margin: auto;
  padding: 40px 0;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  ${media.desktop`
    flex-wrap: nowrap;
    padding: 45px 80px;
    justify-content: space-between;
  `};
`;

const Menu = styled.div`
margin-bottom: 30px;
min-width: 70%;
${
    media.desktop`
    min-width:unset;
    margin-bottom: 0;
    margin-right: 40px;
    `
}
`;

const Pictures = styled.div`
margin-bottom: 30px;
min-width: 70%;
${
    media.desktop`
    min-width:unset;
    margin-bottom: 0;
    margin-right: 40px;
    `
}
`;

const MenuHead = styled.div`
margin-bottom: 10px;
font-size: 16px;
font-weight: 600;
line-height: 1.11;
`;


const PolicyHead = styled.div`
margin-bottom: 20px;
font-size: 16px;
font-weight: 600;
line-height: 1.11;
`;

const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  font-size: 14px;
  font-weight: 200; 
  color:white;
  line-height: 2;
  ${media.desktop`
    white-space: nowrap;
  `}
`;

const Policy = styled.div`
  width: 100%;
  max-width: 764px;
  font-size: 12px;
  line-height: 1.33;

  p {
    text-align: center;
  }
`;

const PolicyRow = styled.p`
  padding-bottom: 10px;
`;

const Flag = styled.img`
  width: 37px;
  height: 22px;
  margin-left: 5px;
  /* ${media.desktop`
    padding: 0;
    margin: 0 8px;
  `} */
`;
const App = styled.img`
  width: 189px;
  height: 63px;
  margin: 16px auto;
  padding: 0 20px;
  object-fit: cover;
  border: 1px solid transparent;
  border-radius: 20%;
  ${media.desktop`
    padding: 0;
    margin: 0 20px;
    object-fit: cover;
    border: 1px solid white;
    border-radius: 20%;
  `}
`;

const menu = [
    {
      name: "HELP",
      links: [
        { title: "1-xxx-xxx-xxxx", url: "www.openfit.com" },
        { title: "1-xxx-xxx-xxxx(text)", url: "www.openfit.com" },
        { title: "help@shopping.com", url: "www.openfit.com" },
        { title: "Return/Exchange", url: "www.openfit.com" },
        { title: "FAQ/Contact Us", url: "www.openfit.com" },
      ]
    },
    {
      name: "SHOP",
      links: [
        { title: "Men's Shoes", url: "www.openfit.com" },
        { title: "Women's Shoes", url: "www.openfit.com" },
        { title: "Men's Apparel", url: "www.openfit.com" },
        { title: "Women's Apparel", url: "www.openfit.com" },
        { title: "Socks", url: "www.openfit.com" },
        { title: "Gift Cards", url: "www.openfit.com" }
      ]
    },
    {
        name: "COMPANY",
        links:[
            {title: "Our Stores", url:"www.openfit.com"},
            {title: "Our Story", url:"www.openfit.com"},
            {title: "Our Materials", url:"www.openfit.com"},
            {title: "Sustainability", url:"www.openfit.com"},
            {title:"Inventors", url:"www.openfit.com"},
            {title: "Partnerships", url:"www.openfit.com"},
            {title: "Careers", url:"www.openfit.com"},
            {title: "Affiliates", url:"www.openfit.com"}
        ]
    }
  ];


export default function Footer(){

    return(
    <div className="footer-wrapper">
       <NewFooter>
        <TopBar>
        {menu.map(({ name, links }) => (
          <Menu>
            <MenuHead>{name}</MenuHead>
            {links.map(({ title, url }) => (
              <MenuLink href={url}>{title}</MenuLink>
            ))}
          </Menu>
        ))}
        </TopBar>
        <MiddleBar>
            <Menu>
            <PolicyHead>FOLLOW THE FLOCK</PolicyHead>
            <PolicyRow>
            Exclusive offers, a heads up on new things, and  
            </PolicyRow>
            <PolicyRow>
            sightings of birds in the wild. Oh, we have cute
            </PolicyRow>
            <PolicyRow>
            sheep, too. #shopping
            </PolicyRow>
            </Menu>
            <Pictures>
            <App src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"/>
            <App src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"/>
            </Pictures>
            <>
            <Flag src="https://cdn.allbirds.com/image/upload/q_auto/cms/3ohqY3WWyehlkYpVi815p9/6f7fbf2f1e4a08abc8da4788a95c2376/flag-us.svg"/>
            <Flag src="https://cdn.allbirds.com/image/upload/q_auto/cms/22gqFXi2QPoT2IhEpBuzOi/d01a77d603e94a10b8a690deded124f7/flag-nz.svg"/>
            <Flag src="https://cdn.allbirds.com/image/upload/q_auto/cms/22gqFXi2QPoT2IhEpBuzOi/d01a77d603e94a10b8a690deded124f7/flag-nz.svg"/>
            <Flag src="https://cdn.allbirds.com/image/upload/q_auto/cms/mpzswQHoLPhzgFkXpcZ7P/eba356c7c7929352d5d3eea6999f5ad3/flag-ca.svg"/>
            <Flag src="https://cdn.allbirds.com/image/upload/q_auto/cms/5OVl6dmwlwOJPrg5F3Ot1s/e9679772ddd64de49cd96cbd4a819743/flag-uk.svg"/>
            </>
        </MiddleBar>
        <BottomBar>
            <Policy>
              <p>© 2022 Shopping, Inc. All Rights Reserved. Terms, Privacy & Accessibility</p>
            </Policy> 
        </BottomBar>
       </NewFooter>
    </div>
    );
};
