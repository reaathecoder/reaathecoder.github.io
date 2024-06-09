

import { prisma } from '$lib';
export const prerender = false;


/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let categories   = await prisma.categories.findMany();
    let edu_contents = await prisma.edu_content.findMany(
        {
            include: {
                category: true
            }
        }
    );
    return {edu_contents , categories };
};


let like_change; 

/** @type {import('./$types').Actions} */
export const actions = {
     
    update_likes: async ({request})=>{

        let form = await request.formData()
        
        let like = JSON.parse(form.get("like"))
        //like is an object with post_id and liked
        //console.log like  

        console.log("likee : " , like.id , like.liked)

        if (like.liked) {
             like_change = +1; 
        }
        else {
             like_change = -1; 
        }


        let edu_content_likes_update = await prisma.edu_content.update({
            where: {id: like.id},
            data: {
                likes: 
                {
                    increment: like_change
                }
            }
        });

        console.log("updated version : " , edu_content_likes_update )

        return {
            success: true
        };



    }

}