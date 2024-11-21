import { Avatar, Card, CardContent, Tooltip, Typography } from '@mui/material';

export default function ItemCard({ userCount = 0, children }) {
  return (
    <Card sx={{ minWidth: 275, position: 'relative' }}>
      {Boolean(userCount) && (
        <Tooltip title={`Total collaborators ${userCount}`}>
          <Avatar
            sx={{
              bgcolor: 'primary.main',
              width: 24,
              height: 24,
              position: 'absolute',
              top: 8,
              right: 8,
            }}
          >
            <Typography variant="caption">{userCount}</Typography>
          </Avatar>
        </Tooltip>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}
