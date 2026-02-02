import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Spinner from "../ui/Spinner";
import CategoryCard from "../features/categories/CategoryCard";
import AddCategory from "../features/categories/AddCategory";
import { useCategories } from "../features/categories/useCategories";

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  gap: 2rem;
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
  color: var(--color-grey-500);
`;

function Categories() {
  const { categories, isLoading } = useCategories();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Categories</Heading>
        <AddCategory />
      </Row>

      {!categories?.length ? (
        <Empty>No categories yet. Add your first one!</Empty>
      ) : (
        <CategoriesGrid>
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </CategoriesGrid>
      )}
    </>
  );
}

export default Categories;
