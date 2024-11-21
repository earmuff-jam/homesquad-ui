import { Skeleton, Stack } from '@mui/material';
import { useGetUserQuery } from '../../services/user';
import ItemCard from '../HomePage/MobileStepper/ItemCard';
import UserDemographics from './UserDemographics';
import UserDetails from './UserDetails';
import UserStatus from './UserStatus';
import ModalWithConfirmationBox from '../../common/ModalWIthConfirmation/ModalWithConfirmationBox';
import { useState } from 'react';
import ActiveChores from './ActiveChores';
import ActiveGroups from './ActiveGroups';
import EditProfileDetails from './EditProfileDetails.jsx/EditProfileDetails';

export default function Profile() {
  const { data, isLoading } = useGetUserQuery();
  const [editMode, setEditMode] = useState(false);

  if (isLoading) {
    return <Skeleton height={'10rem'} />;
  }

  return (
    <Stack spacing={1}>
      <Stack direction={'row'} spacing={1}>
        <UserDemographics data={data} handleEditMode={() => setEditMode(!editMode)} />
        <Stack sx={{ flexGrow: 1 }}>
          <ItemCard>
            <UserDetails data={data} />
          </ItemCard>
        </Stack>
      </Stack>
      <Stack>
        <ItemCard>
          <UserStatus />
        </ItemCard>
      </Stack>
      <ItemCard>
        <ActiveGroups />
      </ItemCard>
      <ItemCard>
        <ActiveChores />
      </ItemCard>
      {editMode && (
        <ModalWithConfirmationBox
          open={editMode}
          handleClose={() => setEditMode(false)}
          maxWidth="sm"
          title={'Edit profile details'}
        >
          <EditProfileDetails profileData={data} handleClose={() => setEditMode(false)} />
        </ModalWithConfirmationBox>
      )}
    </Stack>
  );
}
