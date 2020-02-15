import moment from 'moment';

export const filterNotes = (notes, startDate, endDate, mood, sortBy='desc') => {
    if (!notes) return null; 
    
    return notes.filter(note => {
        const noteMoment = moment(note.createdAt);
        const startDateMatch = startDate ? noteMoment.isSameOrAfter(startDate, 'day') : true;
        const endDateMatch = endDate ? noteMoment.isSameOrBefore(endDate, 'day') : true;
        const moodMatch = mood ? note.mood === mood : true;

        return startDateMatch && endDateMatch && moodMatch;
    }).sort((a, b) => {
        if(sortBy === 'asc') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === 'desc') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
    })
}

export const parseDate = dateStr => {
    //Sample date format
    //Sun Jan 19 2020 23:35:09 GMT-0800 (Pacific Standard Time)
    const arr = dateStr.split(' ');
    return moment(`${arr[1]} ${arr[2]} ${arr[3]}`, 'MMM DD YYYY').format('MMMM DD, YYYY');
}