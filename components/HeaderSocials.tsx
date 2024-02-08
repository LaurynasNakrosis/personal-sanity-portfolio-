import { getProjects, getSocials } from "@/sanity/sanity-utils";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default async function HeaderSocials () {
    const socials = await getSocials();
    console.log(socials)
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




