import React from 'react';

import Center from './Center';
import Column from './Column';
import Left from './Left';
import Right from './Right';
import type { SectionTypes } from '@/types';

export const Section = (props: SectionTypes): JSX.Element => {
    const { contentEntry } = props;

    console.log(contentEntry)

    switch (contentEntry?.fields.textDirection) {
        case "center":
            return <Center contentEntry={contentEntry} />
        case "right":
            return <Right contentEntry={contentEntry} />
        case "left":
            return <Left contentEntry={contentEntry} />
        case "column":
            return <Column contentEntry={contentEntry} />
        default:
            return <Center contentEntry={contentEntry} />
    }
}
export default Section;