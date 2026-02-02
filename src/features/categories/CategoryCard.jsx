import styled, { css } from "styled-components";
import { HiTrash } from "react-icons/hi2";
import { useDeleteCategory } from "./useDeleteCategory";

const Card = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: var(--border-radius-md);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  transition: all 0.2s;

  &:hover {
    box-shadow: var(--shadow-md);
  }
`;

const Icon = styled.span`
  font-size: 3rem;
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 1.4rem;
  color: var(--color-grey-700);
`;

const TypeBadge = styled.span`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.3rem 0.8rem;
  border-radius: 100px;

  ${(props) =>
    props.type === "income" &&
    css`
      color: var(--color-green-700);
      background-color: var(--color-green-100);
    `}

  ${(props) =>
    props.type === "expense" &&
    css`
      color: var(--color-red-700);
      background-color: var(--color-red-100);
    `}
`;

const ColorDot = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color || "var(--color-brand-600)"};
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  opacity: 0;
  transition: all 0.2s;

  ${Card}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
  }

  &:hover svg {
    color: var(--color-red-700);
  }
`;

function CategoryCard({ category }) {
  const { deleteCategory, isDeleting } = useDeleteCategory();
  const { id, name, type, icon, color } = category;

  return (
    <Card>
      <DeleteButton
        onClick={() => deleteCategory(id)}
        disabled={isDeleting}
        title="Delete category"
      >
        <HiTrash />
      </DeleteButton>
      <Icon>{icon}</Icon>
      <Name>{name}</Name>
      <TypeBadge type={type}>{type}</TypeBadge>
      <ColorDot color={color} />
    </Card>
  );
}

export default CategoryCard;
