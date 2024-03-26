import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import ProductList from "../../components/productList";
import { Pagination, PageNumber } from "../home/styles";

export const ProductsScreen = () =>{

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5); // Tamanho fixo da página
    const [totalPages, setTotalPages] = useState(0); // Estado para armazenar o número total de páginas

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
    
    const calculatetotalPages = async () => {
      try {
          const { data } = await axios.get("http://localhost:3000/products");
          return Math.ceil(data.length / pageSize);
      } catch (ex) {
          console.error('erro axios totalpages', ex);  
          return 0; // Retornar um valor padrão em caso de erro
      }
  }

  calculatetotalPages().then(totalPages => setTotalPages(totalPages)); // Chamada direta da função


    const handlePageClick = (pageNumber: number) => {
      setCurrentPage(pageNumber);
  };

    if(isLoading){
      return "loading..."
    }

    if(error){
      return "errp...sorry, deu beyblade"
    }
  
    return (
    <>

                {/* listagem de produtos */}
                <ProductList 
                products={data}
                />
                {/* Paginação */}
                <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PageNumber key={index} onClick={() => handlePageClick(index + 1)}>
                        {index + 1}
                    </PageNumber>
                ))}
            </Pagination>
    </>
)}
