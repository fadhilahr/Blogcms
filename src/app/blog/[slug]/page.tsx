import ShareButton from "@/components/share"
import { getBlogs, getBlogsSlug } from "@/lib/blog"
import { documentToReactComponents, Options} from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';


export const generateStaticParams = async () => {
    const  blog  = await getBlogs() 
    
    return blog.map((item : any)  => ({
        params : {
            slug: item.fields.slug
        }
    }))

}

export async function generateMetadata ({params} : {params: {slug : string}}) {
    const blog = await getBlogsSlug(params.slug) 

    return {
        title : blog.fields.title,
        description: blog.fields.title,
        authors: blog.fields.author.fields.name,
        openGraph: {
            images: [`https:${blog.fields.img.fields.file.url}`, `https:${blog.fields.author.fields.image.fields.file.url}`],
        },
       
    }
}

export default async function BlogContent({params} : {params: {slug: string}}) {
    const blog = await getBlogsSlug(params.slug) 

    const options: Options = {
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <h1 className="my-[2.5px] md:text-3xl sm:text-2xl text-xl">{children}</h1>,
            [BLOCKS.HEADING_2]: (node, children) => <h2 className="my-[2.5px] md:text-2xl sm:text-xl text-lg">{children}</h2>,
            [BLOCKS.HEADING_3]: (node, children) => <h3 className="my-5 md:text-xl sm:text-lg text-base">{children}</h3>,
            [BLOCKS.HEADING_4]: (node, children) => <h4 className="my-5 md:text-lg sm:text-base text-sm">{children}</h4>,
            [BLOCKS.HEADING_5]: (node, children) => <h5 className="my-10 md:text-base sm:text-sm text-xs">{children}</h5>,
            [BLOCKS.HEADING_6]: (node, children) => <h6 className="my-10 mb-20 md:text-base sm:text-sm text-xs">{children}</h6>,
          },
    };
    
    return (
        <div>
            <ShareButton slug={blog.fields.slug} className="mt-5"/>
            <h1>{blog.fields.title}</h1>
            <p>{blog.fields.author.fields.name}</p>
            <p>{blog.fields.date}</p>
            <img src={`${blog.fields.img.fields.file.url}`} alt={`${blog.fields.title}`} />
            {documentToReactComponents (blog.fields.content, options)}
        </div>
    )
}


    

    


