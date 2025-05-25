import { getSocials } from "@/sanity/sanity-utils";
import { SocialIcon } from "react-social-icons";

export default async function HeaderSocials () {
    const socials = await getSocials();
    return(
        <div  >
            {socials.map((social) => (
                <SocialIcon
                    key={social._id}
                    url={social.url}
                    fgColor="gray"
                    bgColor=" transparent "
                />
            ))}
        </div>
    )
}




