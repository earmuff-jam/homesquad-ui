import { Button, Skeleton, Stack } from '@mui/material';
import ViewTemplate from '../HomePage/MobileStepper/ViewTemplate';
import { AddRounded } from '@mui/icons-material';
import { useGetGroupsQuery, useCreateGroupMutation, useUpdateGroupMutation } from '../../services/dashboard';
import { useEffect, useState } from 'react';
import EditGroup from './EditGroup';
import { BLANK_GROUP_FORM } from './constants';
import ModalWithConfirmationBox from '../../common/ModalWIthConfirmation/ModalWithConfirmationBox';

export default function ViewGroups() {
  const { data: groups = [], isLoading: isGroupsLoading } = useGetGroupsQuery();
  const [createGroup] = useCreateGroupMutation();
  const [updateGroup] = useUpdateGroupMutation();

  const [editMode, setEditMode] = useState(false);
  const [createMode, setCreateMode] = useState(false); // apply variation between create / update
  const [selectedValue, setSelectedValue] = useState(null);
  const [formFields, setFormFields] = useState(BLANK_GROUP_FORM);
  const [selectedGroupType, setSelectedGroupType] = useState(null);

  const handleSelectedValue = (ev) => setSelectedValue(ev);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const updatedFormData = { ...formFields };
    let errorMsg = '';

    for (const validator of updatedFormData[id].validators) {
      if (validator.validate(value)) {
        errorMsg = validator.message;
        break;
      }
    }

    updatedFormData[id] = {
      ...updatedFormData[id],
      value,
      errorMsg,
    };
    setFormFields(updatedFormData);
  };

  const handleClose = () => {
    setEditMode(false);
    setSelectedValue(null);
  };

  const isFormDisabled = () => {
    const containsErr = Object.values(formFields).reduce((acc, el) => {
      if (el?.errorMsg) {
        return true;
      }
      return acc;
    }, false);

    const requiredFormFields = Object.values(formFields).filter((v) => v?.isRequired);
    const isRequiredFieldsEmpty = requiredFormFields
      .filter((el) => el.type === 'text')
      .some((el) => el.value.trim() === '');

    return containsErr || isRequiredFieldsEmpty || selectedGroupType === null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isFormDisabled()) {
      return;
    }

    const formattedData = Object.values(formFields).reduce((acc, el) => {
      if (el.value) {
        acc[el.id] = el.value;
      }
      return acc;
    }, {});

    formattedData['group_type_id'] = selectedGroupType.id;

    if (createMode) {
      await createGroup({ data: formattedData }).unwrap();
    } else {
      formattedData['id'] = selectedValue;
      await updateGroup({ data: formattedData }).unwrap();
    }
    handleClose();
  };

  useEffect(() => {
    if (selectedValue !== null) {
      setCreateMode(false);
      setEditMode(true);
      const selectedGroup = groups.find((v) => v.id === selectedValue);
      const updatedFormFields = Object.assign({}, formFields, {
        name: {
          ...formFields.name,
          value: selectedGroup?.name || '',
        },
      });
      setFormFields(updatedFormFields);
      setSelectedGroupType(selectedGroup.group_type);
    } else {
      setCreateMode(true);
      setFormFields(BLANK_GROUP_FORM);
    }
  }, [selectedValue]);

  if (isGroupsLoading) {
    return <Skeleton height={'10rem'} />;
  }

  return (
    <Stack>
      <Button
        sx={{ alignSelf: 'flex-end' }}
        startIcon={<AddRounded />}
        variant="contained"
        onClick={() => setEditMode(!editMode)}
      >
        Add group
      </Button>
      <ViewTemplate
        emptyText="Create groups to begin"
        titleText="View Groups"
        items={groups}
        handleSelectedValue={handleSelectedValue}
      />
      {editMode && (
        <ModalWithConfirmationBox open={editMode} handleClose={handleClose} maxWidth="sm" title={'Add group details'}>
          <EditGroup
            formFields={formFields}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            selectedGroupType={selectedGroupType}
            setSelectedGroupType={setSelectedGroupType}
          />
        </ModalWithConfirmationBox>
      )}
    </Stack>
  );
}
