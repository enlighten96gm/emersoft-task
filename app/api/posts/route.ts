import { paginationHelper } from './../../utils/utils';
import { getPosts, getPostsByTitle, getPostsByCategory } from './../../../lib/data';
import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    const { searchParams } = new URL(req.url) 
    const currentPage = Number(searchParams.get('page'))
    const title = searchParams.get('title')    
    const category = Number(searchParams.get('category'))    
    try {
        let allPosts = getPosts()

        if (title) {
            allPosts = getPostsByTitle(title, allPosts)
        } 

        if (category) {            
            allPosts = getPostsByCategory(category, allPosts)
        }

        const { posts, totalPages } = paginationHelper(currentPage, allPosts)

        return NextResponse.json({message: 'OK', posts, currentPage, totalPages}, {
            status: 200
        })
    } catch (error) {
        return NextResponse.json({message: 'Error', error}, {
            status: 500
        })
    }
}