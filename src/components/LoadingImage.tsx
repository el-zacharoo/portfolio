import { useState, JSX } from "react";

import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";
import type { SystemStyleObject, Theme } from "@mui/system";
import { useQuery } from "@tanstack/react-query";

import { Functions } from "@/functions";

type LoadingImageProps = {
    src: string;
    alt: string;
    skeletonHeight?: number | string;
    sx?: SystemStyleObject<Theme>;
    width?: number | string;
    id?: string;
};

export const LoadingImage = (props: LoadingImageProps): JSX.Element => {
    const { src, skeletonHeight, sx } = props;
    const [load, setLoad] = useState<boolean>(true);
    const functions = new Functions();

    const loadSrc = (): string => functions.imageSrc({ setLoad, src });
    useQuery([src], loadSrc);

    return (
        <>
            {load ? (
                <Skeleton
                    animation={false}
                    sx={sx}
                    variant="rectangular"
                    {...props}
                    height={skeletonHeight}
                />
            ) : (
                <CardMedia sx={sx} component="img" loading="lazy" {...props} />
            )}
        </>
    );
};

export default LoadingImage;
