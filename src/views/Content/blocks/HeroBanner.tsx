import { JSX } from 'react';

import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';

import type { HerobannerProps } from '@/types';

const HeroBanner = (props: HerobannerProps): JSX.Element => {
    const { contentEntry } = props;

    const { url } = contentEntry.fields.heroImage.fields.file ?? {};

    return (
        <Grid container>
            <Grid xs={12} sm={6}>
                <h1>{contentEntry.fields.headline}</h1>
                <p>{contentEntry.fields.body}</p>
            </Grid>
            <Grid xs={12} sm={6}>
                <CardMedia
                    component="img"
                    sx={{ width: '100%', height: 'auto' }}
                    src={url as string}
                    alt={contentEntry.fields.heroImage.fields.title as string}
                />
            </Grid>
        </Grid>
    )
}
export default HeroBanner;