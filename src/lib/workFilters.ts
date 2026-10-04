export const workFilters = [
    { value: 'all', label: 'All' },
    { value: 'product', label: 'Product' },
    { value: 'brand', label: 'Brand' },
    { value: 'data-viz', label: 'Data Visualization' },
] as const;

export function getWorkFilter(value: string | null) {
    return workFilters.find(filter => filter.value === value)?.value ?? 'all';
}
