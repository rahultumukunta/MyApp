import styled from "styled-components" 
import ListView from "../listView"

const ListGrid = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: brown;
  padding: 20px;
  margin-left: 20%;
`
const ViewBox = styled.div`
    width : fit-content;
    height : fit-content;
    background-color: blue;
`

const  ListContainer= () => {
  return (
    <ListGrid>
      {/* {lists.map(items => <ViewBox>{items.title}</ViewBox>)} */}
      <ListView/>
    </ListGrid>
    
  )
}

export default ListContainer