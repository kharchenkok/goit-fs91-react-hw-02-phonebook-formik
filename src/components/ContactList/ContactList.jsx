import { BiSolidUserRectangle, BiPhone } from 'react-icons/bi';
import { DeleteButton, Item, ItemContent, List } from './ContactList.styled';

const ContactList = ({ data, onDeleteContact }) => {
  return (
    <List>
      {data.map(({ id, name, number }) => (
        <Item key={id}>
          <ItemContent>
            <BiSolidUserRectangle />
            {name}
          </ItemContent>
          <ItemContent>
            <BiPhone />
            {number}
          </ItemContent>
          <DeleteButton type={'button'} onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </Item>
      ))}
    </List>
  );
};
export default ContactList;
