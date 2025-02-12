
import { prisma } from '$lib';
import { fail } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import * as crypto from "node:crypto";

/** @type {import('../LogIn/$types').PageServerLoad} */
export async function load(
    {cookies}
) {

    //if the cookie exists and the user is logged in, redirect to the home page
    let id = cookies.get("id")
    let user ; 
    if (id) {
        console.log("id exists", id)
        user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
    }
   
    return {user};
};


function validatePassword(inputPassword, storedSalt, storedHash) {
    const hash = crypto.pbkdf2Sync(inputPassword, storedSalt, 1000, 64, 'sha512').toString('hex');
    return storedHash === hash;
  }


/** @type {import('./$types').Actions} */
export const actions = {

    login: async ({request,cookies})=>{

        console.log("login")
        let form  = await request.formData()
        let username = form.get("username")?.toString()
        let password = form.get("password")?.toString()
        let user = await prisma.user.findUnique({ where: { username : username } });

        if (!user) {
            return fail(401, { login_fail: " Username does not exist " });
        }
        if (validatePassword(password, user.salt, user.hash)) {

            cookies.set("id", user.id, { secure: false, path: "/" });
            console.log(user.salt , user.hash)
        
            throw redirect(307, "/");
        } else {
            return fail(401, { login_fail: "wrong password" });
        }
    }
};