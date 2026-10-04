import { getPostGroups } from '#lib/server/writing.ts';

export async function load() {
    return { groups: await getPostGroups(), title: 'Garden · Ananmay Sharan' };
}
