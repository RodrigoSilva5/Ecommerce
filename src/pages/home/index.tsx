import { FormattedMessage, FormattedNumber } from "react-intl"
import { styled } from "styled-components";
import { useAuth } from "../../hooks/auth";
import { NavBar } from "../../components/navbar/NavBar";
import ProductList from "../../components/productList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface Product {
  id: number;
  imageUrl: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
      id: 1,
      imageUrl: "https://example.com/product1.jpg",
      price: 19.99,
      description: "Product 1 Description"
  },
  {
      id: 2,
      imageUrl: "https://example.com/product2.jpg",
      price: 29.99,
      description: "Product 2 Description"
  },
  {
      id: 3,
      imageUrl: "https://example.com/product3.jpg",
      price: 39.99,
      description: "Product 3 Description"
  },
  {
      id: 4,
      imageUrl: "https://example.com/product4.jpg",
      price: 49.99,
      description: "Product 4 Description"
  },
  {
      id: 5,
      imageUrl: "https://example.com/product5.jpg",
      price: 59.99,
      description: "Product 5 Description"
  },
  {
      id: 6,
      imageUrl: "https://example.com/product6.jpg",
      price: 69.99,
      description: "Product 6 Description"
  },
  {
      id: 7,
      imageUrl: "https://example.com/product7.jpg",
      price: 79.99,
      description: "Product 7 Description"
  },
  {
      id: 8,
      imageUrl: "https://example.com/product8.jpg",
      price: 89.99,
      description: "Product 8 Description"
  },
  {
      id: 9,
      imageUrl: "https://example.com/product9.jpg",
      price: 99.99,
      description: "Product 9 Description"
  },
  {
      id: 10,
      imageUrl: "https://example.com/product10.jpg",
      price: 109.99,
      description: "Product 10 Description"
  }
];

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5); // Tamanho fixo da página

    const { isLoading, error, data } = useQuery({
      queryKey: ['products', currentPage, pageSize],
      queryFn: async () => {
        try {
            const response = await axios.get(`http://localhost:3000/products?_page=${currentPage}&_limit=${pageSize}`);
            return response.data;
        } catch (error) {
            throw new Error("error axios");
        }
      }
    })
    const totalPages = Math.ceil(products.length / pageSize);


    const handlePageClick = (pageNumber: number) => {
      setCurrentPage(pageNumber);
  };

    if(isLoading){
      return "loading..."
    }

    if(error){
      return "errp...sorry, deu beyblade"
    }
  
    // const {user} = useAuth()
    return (
    <>
      {/* menu */}
      <NavBar 
        links={["Home"]}
      />
      {/* listagem de produtos */}
      
      <ProductList 
      products={data}
      />
      {/* footer */}

                {/* Paginação */}
                <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PageNumber key={index} onClick={() => handlePageClick(index + 1)}>
                        {index + 1}
                    </PageNumber>
                ))}
            </Pagination>
          <p>
        {/* <FormattedMessage
          id="myMessage"
          defaultMessage="Today is {ts, date, ::yyyyMMdd}"
          values={{ts: Date.now()}}
        />  */}
        <br />
        <FormattedNumber value={19} style="currency" currency="EUR" />
      </p>
        <Button>normal</Button>
    </>
    )
}
const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const PageNumber = styled.button`
    margin: 0 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "#BF4F74"
  }
}

export {Home}