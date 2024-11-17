import { DeleteRounded } from '@mui/icons-material';
import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EmptyComponent from '../../../common/EmptyComponent/EmptyComponent';

export default function ItemList({ dense = true, data = [], handleClick = () => {}, maxHeight = '10rem' }) {
  const navigate = useNavigate();
  const handleNavigate = (id) => navigate(`chore/${id}`);
  if (data.length <= 0) {
    return <EmptyComponent />;
  }
  return (
    <List dense={dense} sx={{ maxHeight: { maxHeight } }}>
      {data.map((d, index) => {
        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => handleClick(d)}>
                <DeleteRounded color="error" />
              </IconButton>
            }
          >
            <ListItemButton onClick={() => handleNavigate(d?.id)}>
              <ListItemAvatar>
                <Avatar>{d?.icon}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={d?.primary ? d.primary : null} secondary={d?.secondary ? d.secondary : null} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
