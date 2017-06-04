export interface Contact {
    name: string,
    email?: string,
    jobtitle?: string,
    location?: string,
    social?: {
        facebook?: string,
        twitter?: string,
        github?: string,
        linkedin?: string
    },
    tags?: string[]
}