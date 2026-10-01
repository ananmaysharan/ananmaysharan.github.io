export interface Post {
    slug: string;
    title: string;
    date: string;
    description: string;
    updated?: string;
    image?: string;
}

export function formatPostDate(date: string): string {
    return new Intl.DateTimeFormat('en-US', {
        month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'
    }).format(new Date(`${date}T00:00:00Z`));
}
