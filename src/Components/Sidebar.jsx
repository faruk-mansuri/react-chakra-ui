import { AtSignIcon, CalendarIcon, EditIcon } from '@chakra-ui/icons';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <Wrapper>
      <List color='#fff' fontSize='1.2rem' spacing={4}>
        <ListItem>
          <NavLink to='/'>
            <ListIcon as={CalendarIcon} color={'#fff'} />
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to='/create'>
            <ListIcon as={EditIcon} color={'#fff'} />
            New Task
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to='/profile'>
            <ListIcon as={AtSignIcon} color={'#fff'} />
            Profile
          </NavLink>
        </ListItem>
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .active {
    color: purple;
  }
`;
export default Sidebar;
