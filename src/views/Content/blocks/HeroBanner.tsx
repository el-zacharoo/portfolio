import { JSX } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import { useNavigate } from 'react-router-dom';

import type { HerobannerProps } from '@/types';

const HeroBanner = (props: HerobannerProps): JSX.Element => {
    const { contentEntry } = props;
    const navigate = useNavigate();

    const imgUrl = contentEntry.fields.heroImage.fields.file?.url ?? {};

    return (
        <Grid container>
            <Grid xs={12} sm={6}>
                <Typography variant="h1" >{contentEntry.fields.headline}</Typography>
                <Typography color="grey.500" sx={{ my: 2 }}>{contentEntry.fields.body}</Typography>
                <Button variant="contained" onClick={() => navigate(`/${contentEntry.fields.ctaLink}`)} >{contentEntry.fields.ctaLabel}</Button>
            </Grid>
            <Grid xs={12} sm={6}>
                <Box
                    boxShadow={"0 8px 6px -6px rgba(0,0,0,0.75)"}
                    component="img"
                    sx={{ width: "100%", height: "auto" }}
                    src={imgUrl as string}
                    alt={contentEntry.fields.heroImage.fields.title as string}
                />
            </Grid>
        </Grid>
    )
}
export default HeroBanner;