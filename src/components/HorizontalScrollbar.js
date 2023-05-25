import React from 'react';
import { ScrollMenu} from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart }) => (
    <ScrollMenu>
        {data.map((item) => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
            </Box>
        ))}
    </ScrollMenu>
);

export default HorizontalScrollbar;
