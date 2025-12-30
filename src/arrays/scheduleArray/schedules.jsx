

export let schedules = [
    {
        course: 'Envato Mastery',
        task: 'Learn a new part',
        start: 8,
        duration: 1,
        stop: function() {return this.start + this.duration}
    },
    {
        course: 'UI/UX Design Basic',
        task: 'Complete Task 12 ',
        start: 10,
        duration: 2,
        stop: function() {return this.start + this.duration}
    },
    {
        course: 'Mastering Git & Vercel App',
        task: 'Learn a new parts',
        start: 1,
        duration: 1,
        stop: function() {return this.start + this.duration}
    },
    {
        course: 'live class',
        task: 'How to Make Money from...',
        start: 4,
        duration: 2,
        stop: function() {return this.start + this.duration}
    },
]