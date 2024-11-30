import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useState } from 'react';
import ViewTemplate from './ViewTemplate';
import AddChore from './AddChore';
import { useGetGroupsQuery } from '../../../services/dashboard';
const steps = ['Select Group', 'Select Template', 'Add chore'];

export default function MobileStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const { data: groups } = useGetGroupsQuery();

  const stepSelection = {
    1: <ViewTemplate titleText="Select Groups" emptyText="Add Groups to begin" items={groups} />,
    2: <ViewTemplate titleText="Select Template" emptyText="Add Template to begin" items={[]} />,
    3: <AddChore />,
  };

  const handleReset = () => setActiveStep(0);
  const handleNext = () => setActiveStep((activeStep) => activeStep + 1);
  const handleBack = () => setActiveStep((activeStep) => activeStep - 1);

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>All steps completed - you&apos;re finished</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>{stepSelection[activeStep + 1]}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </Box>
        </>
      )}
    </Box>
  );
}
