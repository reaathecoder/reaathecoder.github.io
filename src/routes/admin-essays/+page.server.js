import { prisma } from '$lib';
//import { writeFileSync , unlinkSync , existsSync} from 'fs';

import { fail } from '@sveltejs/kit';

let x = ""
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let essays = await prisma.essay.findMany();
    return {essays  };


    
};

/** @type {import('./$types').Actions} */
export const actions = {
     
    create: async ({request})=>{

        let form = await request.formData()


        let name = form.get("name")?.toString()

        let description = form.get("description")?.toString()

        let image_url = null ; 

        let img = !!form.get("img");
        let url = !!form.get("url") ;

        if (img) {

            image_url = form.get("image");

            let base64 = Buffer.from(await image_url.arrayBuffer())

            image_url ='data:image/jpeg;base64,' + base64.toString('base64')

            console.log(image_url)

            // upload image_url.arrayBuffer to google cloud storage
            // let new_url = await uploadToGoogleCloudStorage(image_url.arrayBuffer);
            // image_url = new_url;
    
        }else if (url) {
            image_url = form.get("image_url")?.toString()
        }



        console.log("image : " , image_url)
        await prisma.essay.create({data:{
            name,
            description,
            image_url,
        }})

        return {
            success: true
        };

      
    },



    update: async ({request})=>{


        let form = await request.formData()

        let id = parseInt(form.get("id"))

        let name = form.get("name")?.toString()

        let description = form.get("description")?.toString()

        let image_url = null ;
        
        let img = !!form.get("img");
        let url = !!form.get("url") ;

        console.log( "img" , img)
        console.log( "url" , form.get("url"))
        
        if (isNaN(id)) {
            return fail(400, {x , missing: true });
        }
    
        // Check if the provided ID exists in the database
        const essay = await prisma.essay.findUnique({ where: { id: id } });
        if (!essay) {
            return fail(400, {x , invalid: true });
        }


        if (img) {

            console.log( "img")
            image_url = form.get("image_update");
            console.log( "image_url" , image_url)

          /*  const image_urlToDelete = await prisma.essay.findUnique({
                where: {
                    id: id ,
                },
                select: {
                  image_url: true,
                },
              });*/


        
          //const uploadPath = `static/${image_url.name}`;
            
        //  writeFileSync(uploadPath, Buffer.from(await image_url.arrayBuffer()));

         // console.log(image_url  , image_url.name)
            
          if (image_url.size != 0){

            
           // image_url = '/' + image_url.name;
           let base64 = Buffer.from(await image_url.arrayBuffer())

           image_url ='data:image/jpeg;base64,' + base64.toString('base64')   

           console.log("yes")

        }else{
            image_url = undefined; 
        }
          if (name =="" && description == ""  && image_url == null) {
                return fail(400, {x , error: true });

            
           }
    
        //    console.log("image_urlToDelete:", image_urlToDelete);

            //check if image-uraldelte exists in static

          /*  if (image_urlToDelete.image_url.startsWith('/') && !image_urlToDelete.image_url.includes("undefined") && existsSync(`static/${image_urlToDelete.image_url.split('/').pop()}`) && image_url.size != 0 && image_url != image_urlToDelete.image_url) {
                
                console.log("must be deleted")

                const fileName = image_urlToDelete.image_url.split('/').pop();
                const filePath = `static/${fileName}`;
                unlinkSync(filePath);
                console.log(`File ${fileName} removed from static directory.`);}
    */

        }else if (url) {
            console.log( image_url) 
            image_url = form.get("image_url")?.toString()
            if (name == "" && description == "" && image_url == "")  {
                console.log(2)

                return fail(400, {x , error: true });

            
            }
        }


       

        let dataToUpdate = {};
        if (name !== undefined && name !== "") {
            dataToUpdate.name = name;
        }
        if (description !== undefined && description !== "") {
            dataToUpdate.description = description;
        }
        if (image_url !== undefined && image_url !== "") {
            dataToUpdate.image_url = image_url;
        }




      
            try {
                const updatedEssay = await prisma.essay.update({
                    where: { id: id }, // Specify the ID of the essay you want to update
                    data: dataToUpdate // Provide the new data you want to update
                });
                console.log("Updated essay:", updatedEssay);
              return {
                    success: true
                };
        ;
            
            } catch (error) {
              

                return fail(400, {x , error: true });
 
            }
    }, 


    delete: async ({request})=>{

        let form = await request.formData()

        let id = parseInt(form.get("id"))

        try {

            

            const  deletedEssay = await prisma.essay.delete({
                where: {
                  id: id ,
                },
              })
            console.log("Deleted essay:", deletedEssay);
            return deletedEssay
            
        } catch (error) {
            console.error("Error updating essay:", error);
            throw error;
        }
    

    

    }  
};




/*
            const image_urlToDelete = await prisma.essay.findUnique({
                where: {
                    id: id ,
                },
                select: {
                  image_url: true,
                },
              });*/

        //      console.log("image_urlToDelete:", image_urlToDelete);

            // if image_url starts with static
         //  if (image_urlToDelete.image_url.startsWith('/')) {

             //   const fileName = image_urlToDelete.image_url.split('/').pop();
             //   const filePath = `static/${fileName}`;
             //   unlinkSync(filePath);
               // console.log(`File ${fileName} removed from static directory.`);

    //    }






    


// Example usage:




