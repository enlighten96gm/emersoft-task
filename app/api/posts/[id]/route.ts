import { NextResponse } from 'next/server';
import { getById } from './../../../../lib/data';
export const GET = async (req: Request, res: Response) => {
    try {
        const id = Number(req.url.split('posts/')[1])
        const post = getById(id)
        if (!post) {
            return NextResponse.json({message: 'Error, wrong ID'}, {status: 404})
        }
        return NextResponse.json({message: 'OK', post}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Error', error}, {
            status: 500
        })
    }   
}