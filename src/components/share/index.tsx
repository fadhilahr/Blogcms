import FbButton from "./facebook";
import TwitterButton from "./twitter";
import WaButton from "./wa";
import CopyButton from "./copy";




const base_url = process.env.BASE_URL_WEB || ""

export default function ShareButton({ slug, className }: { slug: string, className: string }) {
    return (
        <div className={`${className}`}>
            <p className=" text-xs font-bold text-gray-400 py-2 ">BAGIKAN</p>
            <div className="flex gap-1">
                
                <FbButton slug={slug} url={base_url}/>
                <TwitterButton slug={slug} url={base_url}/>
                <WaButton slug={slug} url={base_url}/>
                <CopyButton slug={slug} url={base_url}/>
                
            </div>
        </div>
    )
}