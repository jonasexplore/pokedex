import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../contexts/DataContext";
import CategoryLoader from "../components/Loaders/CategoryLoader";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 20px;

  margin-top: 2rem;

  p {
    border-radius: 0.5rem;
    border: 1px solid var(--black);

    cursor: pointer;
    color: var(--black);

    margin: 0 0.5rem;
    padding: 0.5rem 1.5rem;

    &.${"active"} {
      background: var(--yellow);
      border-color: var(--yellow);
    }
  }
`;

const CategoryList = () => {
  const [categories, setCategories] = useState([] as String[]);
  const { getCategories, selectCategory, selectedCategory } = useContext(
    DataContext
  );

  useEffect(() => {
    const categoryList = getCategories();
    setCategories(categoryList);
  }, []);

  const uniqueCategories = new Set(categories || []);
  let Categories = [...uniqueCategories];
  Categories.unshift("Todos");

  if (!categories.length) {
    return (
      <Container>
        <CategoryLoader />
      </Container>
    );
  }

  const handlerClick = (event) => {
    selectCategory(event.target.id);
  };

  return (
    <Container>
      {Categories.map((category, index) => (
        <p
          key={index}
          id={`${category}`}
          className={selectedCategory === category ? "active" : ""}
          onClick={handlerClick}
        >
          {category}
        </p>
      ))}
    </Container>
  );
};

export default CategoryList;
