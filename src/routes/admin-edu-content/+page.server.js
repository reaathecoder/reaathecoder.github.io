/* eslint-disable no-unused-vars */
/* import */
import { prisma } from '$lib';
import { fail } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let edu_contents = await prisma.edu_content.findMany(
        {
            include : {
                category : true
            }
        }
    );
    let categories = await prisma.categories.findMany();
    return {edu_contents , categories};

    

};



/** @type {import('./$types').Actions} */


export const actions = {
    
         
        create: async ({request})=>{
    
            let form = await request.formData()

            console.log( "flavours" , form.getAll("items"))

            let title = form.get("title")?.toString()
            let link = form.get("url-content")?.toString()
            let img = !!form.get("img");
            let url = !!form.get("url") ;
            let image = null
            let content = form.get("content")?.toString()
            let category = form.getAll("categories")



            
            let cats = await prisma.categories.findMany()
         
         
            for (let i = 0; i < category.length; i++) {
                let exists = false
                for (let j = 0; j < cats.length; j++) {
                    if (cats[j].name === category[i]) {
                        exists = true
                    }
                }
                if (!exists) {

                    console.log("doesn't exist")
                    let newCat = await prisma.categories.create({data:{
                        name: category[i]
                    }})

                    console.log("newCat" , newCat)
                }
            }

            console.log("cats" , await prisma.categories.findMany()) 
            console.log("category" , category)


            if (img) {
                console.log(
                "image"
                )

                image = form.get("image");
    
                let base64 = Buffer.from(await image.arrayBuffer())
    
                image ='data:image/jpeg;base64,' + base64.toString('base64')
    
                console.log(image)
    
        
            }else if (url) {
    
                 image = form.get("image_url")?.toString()
            }

            
            if (title == "" || content == ""  || image == null || link == "" || category.length == 0) {
                return fail(400, { emptyField : true });
            }


            console.log("new thing ..... ")
            console.log ("title" , title)
            console.log ("link" , link)
            console.log ("image" , image)
            console.log ("content" , content)
            console.log ("category" , category)

        let newContent =   await prisma.edu_content.create({data:{
                title,
                link,
                image,
                content,
                category : {
                    connect : category.map((cat)=>{
                        return {name : cat}
                    })
                },   
        }})

        return {
            successfullyCreated : true

        };   
       },

        update: async ({request})=>{
            
            let form = await request.formData()
            let id = parseInt(form.get("id"))
            let title = form.get("title")?.toString()
            let link = form.get("url-content")?.toString()
            let img = !!form.get("img");
            let url = !!form.get("url") ;
            let image = null
            let content = form.get("content")?.toString()
            let category = form.getAll("items")
            let catRem = form.getAll("catRem")

            
            
            if (isNaN(id)) {

                return fail(400, { missingId: true });
            }

            if (catRem.length > 0) {
                catRem = catRem[0].split(",")
            }else{
                catRem = []
            }
            
            console.log(catRem)


            let cats = await prisma.categories.findMany()

            for (let i = 0; i < category.length; i++) {
                let exists = false
                for (let j = 0; j < cats.length; j++) {
                    if (cats[j].name === category[i]) {
                        exists = true
                    }
                }
                if (!exists) {

                    console.log("doesn't exist")
                    let newCat = await prisma.categories.create({data:{
                        name: category[i]
                    }})

                }
            }


            if (img) {
              
                image = form.get("image_update");
                
                if (image!=null && image.size != 0){

            
                    let base64 = Buffer.from(await image.arrayBuffer())
    
                    image ='data:image/jpeg;base64,' + base64.toString('base64')
        
                    console.log(image)
         
                 }else{
                     image = undefined; 
                 }
                if (title == "" && content == ""  && image == null && link == "" && category.length == 0) {
                         return fail(400, { missingFields : true });   
                 }

            }else if (url) {
    
                 image = form.get("image_url")?.toString()

                 if (title == "" && content == ""  && image == "" && link == "" && category.length == 0) {
                    return fail(400, { missingFields : true });
                 
            }}

            if (!isNaN(id)){
                // does the id exist in the database

                let record = await prisma.edu_content.findUnique({
                    where : {
                        id : id
                    },
                    include : {
                        category : true
                    }
                })

                if (record) {  
                    if (catRem && catRem.length > 0) {
                        for (let i = 0; i < catRem.length; i++) {
                            for (let j = 0; j < record.category.length; j++) {
                                if (catRem[i] === record.category[j].name) {

                                    // remove category from category array in record.category (aka database)
                                    console.log("removing category")
                                    console.log(record.category[j].name)
                                    console.log(catRem[i])
                                    console.log(record.category)
                                    record.category.pop(record.category[j]) 
                                }
                            }
                        }   
                    }
                    for (let i = 0; i < category.length; i++) {
                        for (let j = 0; j < record.category.length; j++) {
                            if (record.category[j].name === category[i]) {
                                category.pop(category[i])
                            }
                        }
                   
                    }
                } else{
                    console.log("Record doesn't exist")
                    return fail(400 , {IDnotAvailable : true})
                    
                }

                console.log("new thing ..... ")
                console.log ("id" , id)
                console.log ("title" , title)
                console.log ("link" , link)
                console.log ("image" , image)
                console.log ("content" , content)
                console.log ("category" , category)
                
                let dataToUpdate = {};
                if (title !== undefined && title !== "") {
                    dataToUpdate.title = title;
                }
                if (content !== undefined && content !== "") {
                    dataToUpdate.content = content;
                }
                if (image !== undefined && image !== "" && image !== null) {
                    dataToUpdate.image = image;
                }if (link !== undefined && link !== "") {
                    dataToUpdate.link = link;
                }if (category.length !== 0) {
                    dataToUpdate.category = {

                        connect : category.map((cat)=>{
                            return {name : cat}
                        })
                    }
                }
                console.log(catRem?catRem:"noCatRem" , category)
                let deletesomecats = await prisma.edu_content.update({
                    where : {
                        id : id
                    },
                    data : {
                        category : {
                            disconnect :catRem.map((cat)=>{
                                return {name : cat}
                            })
                        }
                    }
                    
                },
                )
                //if sucessfully updated , return success
                let updatedContent = await prisma.edu_content.update({
                    where : {
                        id : id
                    },
                    data : 
                    dataToUpdate
                }
                )
                return {
                    successfullyUpdated : true
        
                };
            }
        },
      
        delete: async ({request})=>{

            let form = await request.formData()
    
            let id = parseInt(form.get("id"))
    
            try {
    
                
    
                const  deletedContent= await prisma.edu_content.delete({
                    where: {
                      id: id ,
                    },
                  })
                console.log("Deleted Content:", deletedContent);
                return {
                    successfullyDeletedPost : true
                }
                
            } catch (error) {
                console.error("Error updating essay:", error);
                throw error;
            }
        
    
        
    
        }  ,
        deleteCat : async ({request})=>{

            let form = await request.formData()
    
            let id = parseInt(form.get("id"))
    
            try {
    
                
    
                const  deletedContent= await prisma.categories.delete({
                    where: {
                      id: id ,
                    },
                  })
                console.log("Deleted Content:", deletedContent);
                return {
                    successfullyDeletedCat : true
                }
                
            } catch (error) {
                console.error("Error updating essay:", error);
                throw error;
            }
        
    
        
    
        }



}