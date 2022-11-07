import styled from "@emotion/styled";

const Img = styled.img`
  width:100%;
  object-fit: cover;
  max-height: 800px;
`;

const SectionBreakerWrapper = styled.div`
  margin: 2rem auto;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

const SectionBreakerCaptionWrapper = styled.div`
    width: 100%;
    max-width: 700px;
    padding: 4rem 1rem;

    h2 {
        font-weight: 700;
        font-size: 25px;
        line-height: 1.32;
        letter-spacing: 0.5px;
        color: rgb(33, 42, 47);
        margin: 0px;
        padding: 0px;
    }

    p {
        font-weight: 400;
        color: rgb(33, 42, 47);
        line-height: 1.5;
        font-size: 16px;
        letter-spacing: 0.5px;
        margin: 0px 0px 18px;
        padding: 0px;
    }

    @media (min-width: 768px) {
        h2 {
            font-size: 28px;
        }

        p{
            font-size: 19px;
         }
    }

    @media (min-width: 992px) { 

        h2 {
            font-size: 32px;
        }

        p{
            font-size: 23px;
         }
    }
`
type Props = {
    img: string
    children: JSX.Element
}

export default function SectionBreaker({ img, children }:Props) {
    return (
        <SectionBreakerWrapper>
            <Img src={img} alt="" ></Img>
            <SectionBreakerCaptionWrapper>
                {children}
            </SectionBreakerCaptionWrapper>
        </SectionBreakerWrapper>
    )
}