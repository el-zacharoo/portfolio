import { JSX } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { useNavigate } from "react-router-dom";

import { LoadingImage } from "@/components/LoadingImage";
import type { HerobannerProps } from "@/types";

const HeroBanner = (props: HerobannerProps): JSX.Element => {
    const { contentEntry } = props;
    const navigate = useNavigate();

    const imgUrl = contentEntry.fields.heroImage.fields.file?.url ?? {};

    return (
        <Box sx={{ backgroundColor: "primary.light" }}>
            <Container sx={{ py: 6 }}>
                <Grid
                    spacing={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch">
                    <Grid xs={12} sm={6} md={3}>
                        <LoadingImage
                            skeletonheight="100%"
                            sx={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 2,
                            }}
                            src={imgUrl as string}
                            alt={
                                contentEntry.fields.heroImage.fields
                                    .title as string
                            }
                        />
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        justifyContent="space-between"
                        xs={12}
                        sm={6}
                        md={9}>
                        <Grid>
                            <Typography variant="h5" color="white">
                                {contentEntry.fields.headline}
                            </Typography>
                            <Typography variant="h1" color="white">
                                {contentEntry.fields.subheader}
                            </Typography>
                            <Typography color="white" sx={{ my: 2 }}>
                                {contentEntry.fields.body}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                onClick={() =>
                                    navigate(`/${contentEntry.fields.ctaLink}`)
                                }>
                                {contentEntry.fields.ctaLabel}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
export default HeroBanner;
