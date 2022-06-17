import styled, { css } from "styled-components";

import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
interface TodoList {
  id: string;
  title: string;
}
export default function Drag() {
  const [todoLikes, setTodoLikes] = useState<TodoList[]>([
    { id: "1", title: "👩‍💻 React + TS 공부👩‍💻" },
    { id: "2", title: "🐜 아르바이트 뚠뚠 🐜" },
    { id: "3", title: "🏃‍♀️ 아침운동40분 🏃‍♀️" },
    { id: "4", title: "🎶 SOPT K-POP 🎶" },
    { id: "5", title: "🍞 베이킹 🍞" },
  ]);
  const [todos, setTodos] = useState<TodoList[]>([
    { id: "1", title: "💙 DRAG.ME 💙" },
    { id: "2", title: "" },
    { id: "3", title: "" },
    { id: "4", title: "" },
    { id: "5", title: "" },
  ]);
  const handleChange = (result: DropResult) => {
    if (!result.destination) return;
    const items = [...todos];
    const likeItems = [...todoLikes];
    const [reorderedItem] = likeItems.splice(
      result.source.index - todoLikes.length,
      1
    );
    reorderedItem.id = result.destination.index + "1";
    items.splice(result.destination.index, 1, reorderedItem);
    setTodos(items);
  };
  return (
    <>
      <DragDropContext onDragEnd={handleChange}>
        <Droppable droppableId="todos">
          {(provided) => (
            <StUl
              className="todos"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map(({ id, title }, index) => (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <StLi
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {title}
                    </StLi>
                  )}
                </Draggable>
              ))}
              {todoLikes.map(({ id, title }, index) => (
                <Draggable
                  key={String(Number(id) + todos.length)}
                  draggableId={String(Number(id) + todos.length)}
                  index={index + todos.length}
                >
                  {(provided) => (
                    <StLikeLi
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {title}
                    </StLikeLi>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </StUl>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}

const StUl = styled.ul`
  ${({ theme }) => theme.fonts.dnd_h1};
`;
const StLi = styled.li`
  width: 30rem;
  padding: 4rem;
  margin: 2rem;
  ${({ theme }) => theme.fonts.dnd_h1};
  color: ${({ theme }) => theme.colors.dnd_blue};
  background-color: ${({ theme }) => theme.colors.dnd_skyblue};
  text-align: center;
`;
const StLikeLi = styled(StLi)`
  float: left;
`;
