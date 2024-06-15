"use server";
import prisma from "@/lib/db";

type getCompositionstype = {
    locale: string;
    skip: number;
    take: number;
}
export default async function getCompositions({ locale, skip, take }: getCompositionstype) {

    // these fields are used to dynamically fetch data of composition based on language setting
    const titleField = `title_${locale}`;
    const descriptionField = `description_${locale}`;

    const response = await prisma.composition.findMany({
        select: {
            id: true,
            url: true,
            [titleField]: true,
            [descriptionField]: true,
            published_date: true
        },
        orderBy: {
            published_date: "desc"
        },
        skip: skip,
        take: take
    });

    const formatted = response.map(result => ({
        id: result.id as number,
        url: result.url as string,
        title: result[titleField] as string,
        description: result[descriptionField] as string,
        published_date: result.published_date as Date
    }));

    return formatted
}

export type CompositionsType = Awaited<ReturnType<typeof getCompositions>>;