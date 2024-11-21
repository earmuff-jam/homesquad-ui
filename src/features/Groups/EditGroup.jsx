import { Button, Stack } from '@mui/material';
import TextFieldWithLabel from '../../common/TextFieldWithLabel/TextFieldWithLabel';
import ViewGroupType from './ViewGroupType';

export default function EditGroup({ formFields, handleChange, handleSubmit, selectedGroupType, setSelectedGroupType }) {
  return (
    <Stack spacing={1}>
      <TextFieldWithLabel
        id={formFields.name.id}
        name={formFields.name.name}
        label={formFields.name.label}
        placeholder={formFields.name.placeholder}
        handleChange={handleChange}
        value={formFields.name.value}
        variant={formFields.name.variant}
        error={Boolean(formFields.name['errorMsg'].length)}
        helperText={formFields.name['errorMsg']}
      />
      <ViewGroupType selectedGroupType={selectedGroupType} setSelectedGroupType={setSelectedGroupType} />
      <Button onClick={handleSubmit}>Submit</Button>
    </Stack>
  );
}
