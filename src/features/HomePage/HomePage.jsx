import dayjs from 'dayjs';
import ViewDateTime from '../../common/DateTimePicker/ViewDateTime';
import AvatarWithText from './AvatarWithText/AvatarWithText';
import Row from '../../common/Row/Row';
import TaskCompletion from './TaskCompletion/TaskCompletion';
import ItemList from './ItemList/ItemList';
import { useState } from 'react';
import MobileStepper from './MobileStepper/MobileStepper';
import ModalWithConfirmationBox from '../../common/ModalWIthConfirmation/ModalWithConfirmationBox';
import { useGetUserQuery } from '../../services/user';

export default function HomePage() {
  const { data, isLoading: isUserDetailsLoading } = useGetUserQuery();
  const [showAddStepper, setShowAddStepper] = useState(false);

  const handleOpen = () => setShowAddStepper(true);
  const handleClose = () => setShowAddStepper(false);

  return (
    <>
      <AvatarWithText
        isLoading={isUserDetailsLoading}
        salutation={`Welcome back, ${data?.firstname || 'Anonymous'}`}
        handleAdd={handleOpen}
      />
      <Row
        marginTop={'2rem'}
        firstElement={<ViewDateTime currentTime={dayjs()} layout={'MMMM DD, YYYY'} />}
        secondElement={<TaskCompletion completionPercent={0} />}
      />
      <ItemList dense="true" data={[]} />
      {showAddStepper && (
        <ModalWithConfirmationBox
          open={open}
          handleClose={handleClose}
          primaryButton={'Close'}
          secondaryButton={'Submit'}
        >
          <MobileStepper />
        </ModalWithConfirmationBox>
      )}
    </>
  );
}
