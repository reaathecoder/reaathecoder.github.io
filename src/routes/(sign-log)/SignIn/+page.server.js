/** @type {import('../LogIn/$types').PageServerLoad} */
import { prisma } from '$lib';
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';



export async function load() {

    const users = await prisma.user.findMany();
    return {users};
};


/** @type {import('./$types').Actions} */
export const actions = {

    signup: async ({request,cookies})=>{
        let form  = await request.formData()
        let email = form.get("email")?.toString()
        let password = form.get("password")?.toString()
        let name = form.get("name")?.toString()
        let username = form.get("username")?.toString()
        let role = form.get("role")?.toString()
        let recieveNotifications = Boolean(form.get("sendupdates"))


       

        if (password.length < 8) {
            return fail(400, { passwordTooShort: true })
        }


         // does the user already exist ?

        let user = await prisma.user.findUnique({ where: { username : username } });

        if (user) {
        // if so, is the passwords matching ?
            if (user.password == password) {
                // if matching => login
                cookies.set("id", user.id, { secure: false, path: "/" });
                throw redirect(307, "/LogIn");
            } else {
                // else error
                return fail(401, { login_fail: "wrong password" });
            }
        }else{

      

        let new_user = await prisma.user.create({data:{
            name,
            email,
            username,
            password,
            role,
            recieveNotifications
        }})


        console.log("new_user : ", new_user)

        cookies.set("id", new_user.id, { secure: false, path: "/" });
        throw redirect(307, "/LogIn");

    }
    }
    
};