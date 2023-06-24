import Avatar from "@mui/material/Avatar";
import PropTypes from 'prop-types';
import Link from "@mui/material/Link";


interface SocialItemProps {
    url: string,
    img: any
}

export const SocialItem = (props: SocialItemProps) => {
    return (
        <Link href={props.url}>
            <Avatar variant="rounded" src={props.img} />
        </Link>
    );
}

SocialItem.propType = {
    url: PropTypes.string.isRequired,
    img: PropTypes.any.isRequired
};