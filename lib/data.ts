import data from '../mock/data.json'

export type PostType = {
    id: number
    slug: string
    title: string
    excerpt: string
    imageUrl: string
    categories: number[]
}

export type CategoriesType = {
    id: number
    name: string
    slug: string
}

let posts: PostType[] = [...data.posts]
let categories: CategoriesType[] = [...data.categories]

export const getPosts = () => posts

export const getCategories = () => categories

export const getById = (id: number) => posts.find((post) => post.id === id)

export const getPostsByCategory = (id: number, allPosts: PostType[]) => allPosts.filter(item => item.categories.includes(id));

export const getPostsByTitle = (char: string, allPosts: PostType[]) => allPosts.filter(item => item.title.toLowerCase().includes(char.toLowerCase()))