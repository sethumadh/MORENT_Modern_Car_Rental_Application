import { FC } from "react"
import { Link } from "react-router-dom"

import { Header, Footer, AsideLeft, SearchBar, PickUpDropOff, CarsList } from "../../components"
import { CarDetailsWrapper, Container, MainContent, MoreBtn, MoreDiv } from "./styles"

const Category: FC = () => {
  return (
    <CarDetailsWrapper>
      <SearchBar showSearchBar={true} showFilter={true} />
      <Container>
        <AsideLeft />
        <MainContent>
          <PickUpDropOff />
          <CarsList />
          <MoreDiv>
            <Link to="/category" style={{ textDecoration: "none" }}>
              <MoreBtn>Show more cars</MoreBtn>
            </Link>
          </MoreDiv>
        </MainContent>
      </Container>
      <Footer />
    </CarDetailsWrapper>
  )
}

export default Category
