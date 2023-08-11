import React from "react";

import { Asset, EntrySkeletonType } from "contentful";

export type SectionTypes = {
    contentEntry: EntrySkeletonType<{
        ctaLabel?: string;
        ctaSlug?: string;
        body: string;
        image: Asset;
        headline: string;
        sectionType: string;
        textDirection: string;
    }>
};

export type HerobannerProps = {
    contentEntry: EntrySkeletonType<{
        headline: string;
        subheader: string;
        body: string;
        heroImage: Asset;
        ctaLabel: string;
        ctaLink: string;
    }>
};

export type ContentBlockType = EntrySkeletonType<{
    blocks: Array<{
        [key: string]: string | HerobannerProps | SectionTypes | TileBlockProps
    }>
}> | undefined;

export type IHeader = EntrySkeletonType<{
    blocks: Array<NavLinks>
}> | undefined;

export type NavLinks = EntrySkeletonType<{
    name: string;
    pageSlug: string;
    media: Asset;
}>;

export type TileBlockProps = {
    contentEntry: EntrySkeletonType<{
        headline: string;
        description: string;
        tiles: EntrySkeletonType<{
            title: string;
            image: Asset;
            list: string
        }>[];
    }>
}


export type AllEntries = Record<string, React.FC<HerobannerProps & SectionTypes & TileBlockProps>>; 