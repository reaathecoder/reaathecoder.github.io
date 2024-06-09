/** @type {import('./$types').PageServerLoad} */

import { prisma } from '$lib';
import { fail } from '@sveltejs/kit';

export async function load() {
    let quizzes = await prisma.quiz.findMany();
    return {quizzes};
};

/** @type {import('./$types').Actions} */
export const actions = {

    create: async ({request})=>{
        let form  = await request.formData()
        let title = form.get("title")?.toString()
        let url = form.get("url")?.toString()
        let setActive = false
        console.log("title : ", title)
        console.log("url : ", url)
        
        let quizzes = await prisma.quiz.findMany();

        console.log("quizzes : ", quizzes)

        if (quizzes && quizzes.length == 0) {
            console.log("quizzes.length : ", quizzes.length)
            setActive = true
        }
        
        if (title == "" || url == "") {
            return fail(400, { missing: true })
        }
        
        try {
            let new_quiz = await prisma.quiz.create({data:{
                title,
                url,
                setActive
            }})
            console.log("new_quiz : ", new_quiz)
            return {
                successfullyCreated: true
            };
        } catch (error) {
            console.log("error : ", error)
            return fail("couldn't create quiz")
        }
     
       
    },
    
    update: async ({request})=>{

        let form = await request.formData()
        let id = parseInt(form.get("id"))
        let title = form.get("title")?.toString()
        let url = form.get("url")?.toString()

        let quiz = await prisma.quiz.findUnique({where:{id:id}})
        if(quiz == null){
            return fail(400, { invalid: true })
        }else if(title == "" && url == ""){
            return fail(400, { missing: true })
        }

        if(title == ""){
            title = quiz.title
        }else if(url == ""){
            url = quiz.url
        }

        let updated_quiz = await prisma.quiz.update({where:{id:id}, data:{
            title,
            url
        }})
        console.log("updated_quiz : ", updated_quiz)
        return {
            successfullyUpdated: true
        };
        
    },
    
    delete: async ({request})=>{

        let form = await request.formData()
        let id = parseInt(form.get("id"))
        let quiz = await prisma.quiz.findUnique({where:{id:id}})
        if(quiz == null){
            return fail(400, { invalid: true })
        }

        let deleted_quiz = await prisma.quiz.delete({where:{id:id}})
        console.log("deleted_quiz : ", deleted_quiz)
        return {
            successfullyDeleted: true
        };

        
      
    }
}    