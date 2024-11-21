import { Stack, TextField, Typography } from '@mui/material';

export default function TextFieldWithLabel({
  id,
  label,
  name,
  placeholder,
  value,
  handleChange,
  variant = 'outlined',
  size = 'sm',
  error,
  helperText,
  direction = 'column',
}) {
  return (
    <Stack direction={direction} spacing={1}>
      <Typography variant="subtitle2" color="text.secondary" fontWeight={"bold"}>
        {label}
      </Typography>
      <TextField
        fullWidth
        id={id}
        name={name}
        placeholder={placeholder}
        value={value || ''}
        onChange={handleChange}
        variant={variant}
        size={size}
        error={error}
        helperText={helperText}
      />
    </Stack>
  );
}
