

export let scheduleArray = [
    {
        course: 'UI/UX Design Basic',
        task: 'Complete Task 12 ',
        start: 10,
        duration: 2,
        stop: function() {return this.start + this.duration}
    }
]