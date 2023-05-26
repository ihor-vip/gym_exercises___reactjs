import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
        <Typography variant="h3">Exercises that target the same muscle group</Typography>
        <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
            {targetMuscleExercises.length && <HorizontalScrollbar data={targetMuscleExercises} />}
        </Stack>
    </Box>
);

export default SimilarExercises;
