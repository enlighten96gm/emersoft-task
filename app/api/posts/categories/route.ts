import { getCategories } from './../../../../lib/data';
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {
    try {
        const categories = getCategories()        
        return NextResponse.json({message: 'OK', categories}, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}, {
            status: 500
        })
    }
}