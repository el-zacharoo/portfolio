import { JSX } from "react";

import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';

import type { TileBlockProps } from "@/types";

const TileBlock = (props: TileBlockProps): JSX.Element => {
    const { contentEntry } = props;

    return (
        <Box>
            <Typography variant="h2">
                {contentEntry.fields.headline}
            </Typography>
            <Grid container>
                {contentEntry.fields.tiles.map((tile, index) =>
                    <Grid key={index} xs={3}>
                        <Avatar
                            variant="square"
                            sx={{ width: 100, height: 100 }}
                            src={tile.fields.image.fields?.file?.url as string}
                            alt={tile.fields.title} />
                        <Typography variant="caption">
                            {tile.fields.title}
                        </Typography>
                    </Grid>
                )}

            </Grid>
        </Box>
    )
}

export default TileBlock;

