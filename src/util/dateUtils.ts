
export const time_shortcuts = [
    {
        index: 0,
        text: 'All',
        value: () => {
            const start = new Date()
            const end = new Date()
            end.setFullYear(end.getFullYear() + 1)
            return [start, end];
        },
    },
    {
        index: 1,
        text: '7Week',
        value: () => {
            const start = new Date()
            const end = new Date()
            end.setDate(start.getDate() + 7)
            return [start, end];
        },
    },
    {
        index: 2,
        text: '7Week - 14Week',
        value: () => {
            const start = new Date()
            const end = new Date()
            start.setDate(start.getDate() + 7)
            end.setDate(end.getDate() + 14)
            return [start, end];
        },
    },
    {
        index: 3,
        text: '14Week - 21Week',
        value: () => {
            const start = new Date()
            const end = new Date()
            start.setDate(start.getDate() + 14)
            end.setDate(end.getDate() + 21)
            return [start, end];
        },
    },
    {
        index: 4,
        text: '21Week - 1Month',
        value: () => {
            const start = new Date()
            const end = new Date()
            start.setDate(start.getDate() + 21)
            end.setMonth(end.getMonth() + 1)
            return [start, end];
        },
    },
    {
        index: 5,
        text: 'After 1Month',
        value: () => {
            const start = new Date()
            const end = new Date()
            start.setMonth(start.getMonth() + 1)
            end.setFullYear(end.getFullYear() + 1)
            return [start, end];
        },
    },
]

function resetTime(date) {
    // 创建一个新的 Date 对象，将时间部分设为 00:00:00
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}