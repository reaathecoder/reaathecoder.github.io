import { prisma } from '$lib';

/** @type {import('./$types').PageServerLoad} */
export async function load(
    {cookies}
) {
    //check if a cookie exists with the name "id"

    let user; 

    let id = cookies.get("id")
    if (id) {
        // if so, redirect to the home page
        console.log("id exists" , id)
        user = await prisma.user.findUnique({ where: { id : parseInt(id) } });
        console.log("user : ", user)
        
    }

   


    return {user};


};