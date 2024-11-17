import { Card, CardContent, Typography } from '@mui/material';

export default function ItemCard({ item = {}, children }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {item && (
          <>
            <Typography variant="h5">{item.title}</Typography>
            <Typography color="text.secondary" variant="caption">
              {item.caption}
            </Typography>
          </>
        )}
        {children}
      </CardContent>
    </Card>
  );
}
