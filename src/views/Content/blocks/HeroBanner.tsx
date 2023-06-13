import type { HerobannerProps } from '@/types';

const HeroBanner = (props: HerobannerProps): JSX.Element => {
    const { contentEntry } = props;

    return (
        <div>
            <h1>{contentEntry.fields.headline}</h1>
            <p>{contentEntry.fields.body}</p>
        </div>
    )
}
export default HeroBanner;