
import { Card } from "@/components/card";
import { getBlogs } from "@/lib/blog";



export default async function Home() {
  const blogs = await getBlogs()
  //console.log(blogs[0].fields.slug);

  

  return (
    <div className="h-screen">
      <div className="flex gap-2 flex-wrap"> 
      {
        blogs.map((items : any)=> {
          //console.log(items);
          
          return (
            <Card
              key={items.sys.id}
              title={items.fields?.title}
              image = {items.fields.img.fields.file.url}
              image_profile={items.fields}
              author={items}
              slug ={items.fields.slug}
            
            
            />

          )
          
        })
      }

      </div>

    </div>
  );
}
