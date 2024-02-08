import { getPageInfo } from "@/sanity/sanity-utils";

export default async function AboutInfo () {
    const information = await getPageInfo();
    return(
        <div  >
            {information.map((info)=>(
                <p className='text-xs sm:text-xm lg:text-base ' key={info._id}>{info.backgroundInformation}</p>
            ))}
        </div>
    )
}