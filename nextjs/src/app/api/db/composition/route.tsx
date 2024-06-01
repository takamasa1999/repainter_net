/**
 * @swagger
 * /api/db/composition:
 *   get:
 *     description: get new data
 *    
 */

import { PrismaClient } from '@prisma/client'
import { NextApiRequest } from 'next';



export async function POST(_request: NextApiRequest) {
    try {
        const registered_composition = registerNewComposition({
            id: _request.body.id,
            url:"",
            description_jp: "",
            description_en: "string"
        })
        return new Response(JSON.stringify(registered_composition), {
            status: 200,
        });
    } catch (error: any) {
        return new Response(
            JSON.stringify({
                status: "error",
                message: error.message,
            }), {
            status: 500,
        });
    }
}

type Props = {
    id: number,
    url: string,
    description_jp: string,
    description_en: string
}
export async function registerNewComposition(props: Props){
    const prisma = new PrismaClient()

    const registered_composition = await prisma.composition.create(
        {
            data: {
                id: props.id,
                url: props.url,
                description_jp: props.description_jp,
                description_en: props.description_en
            }
        }
    )
    return registered_composition
}