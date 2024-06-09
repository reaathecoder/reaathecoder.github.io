
import { prisma } from '$lib';



/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let essays = await prisma.essay.findMany();
    return {essays};
   
};
