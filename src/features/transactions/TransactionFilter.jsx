import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import { useCategories } from "./useCategories";

const FilterContainer = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  flex-wrap: wrap;
`;

const FilterGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Label = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-grey-600);
`;

const Select = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  cursor: pointer;

  &:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }
`;

function TransactionFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { categories } = useCategories();

  const currentType = searchParams.get("type") || "all";
  const currentCategory = searchParams.get("category") || "all";
  const currentSort = searchParams.get("sortBy") || "date-desc";

  function handleChange(field, value) {
    searchParams.set(field, value);
    setSearchParams(searchParams);
  }

  return (
    <FilterContainer>
      <FilterGroup>
        <Label>Type:</Label>
        <Select
          value={currentType}
          onChange={(e) => handleChange("type", e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
      </FilterGroup>

      <FilterGroup>
        <Label>Category:</Label>
        <Select
          value={currentCategory}
          onChange={(e) => handleChange("category", e.target.value)}
        >
          <option value="all">All</option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.icon} {cat.name}
            </option>
          ))}
        </Select>
      </FilterGroup>

      <FilterGroup>
        <Label>Sort:</Label>
        <Select
          value={currentSort}
          onChange={(e) => handleChange("sortBy", e.target.value)}
        >
          <option value="date-desc">Newest first</option>
          <option value="date-asc">Oldest first</option>
          <option value="amount-desc">Highest amount</option>
          <option value="amount-asc">Lowest amount</option>
        </Select>
      </FilterGroup>
    </FilterContainer>
  );
}

export default TransactionFilter;
