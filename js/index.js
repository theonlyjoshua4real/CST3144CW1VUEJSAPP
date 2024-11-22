new Vue({
    el: '#app',
    data:{
        name: 'Lesson Booking System',
        lessons: [
            {id: 'PHY101', name: 'Physics', locat: 'Lab 2', price: '$100', initspace: 5, spaces: 5, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'MAT101', name: 'Mathematics', locat: 'Room 101', price: '$80', initspace: 10, spaces: 10, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'CHE101', name: 'Chemistry', locat: 'Lab 3', price: '$90', initspace: 6, spaces: 6, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'BIO101', name: 'Biology', locat: 'Room 102', price: '$85', initspace: 8, spaces: 8, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'HIS101', name: 'History', locat: 'Room 103', price: '$70', initspace: 12, spaces: 12, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'GEO101', name: 'Geography', locat: 'Room 104', price: '$75', initspace: 9, spaces: 9, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'ENG101', name: 'English', locat: 'Room 105', price: '$65', initspace: 15, spaces: 15, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'ART101', name: 'Art', locat: 'Room 106', price: '$60', initspace: 10, spaces: 10, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'MUS101', name: 'Music', locat: 'Room 107', price: '$95', initspace: 7, spaces: 7, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'CSE101', name: 'Computer Science', locat: 'Lab 1', price: '$110', initspace: 4, spaces: 4, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'PE101', name: 'Physical Education', locat: 'Gym', price: '$50', initspace: 20, spaces: 20, taken: 0,imgurl: 'img/books.png'}, 
            {id: 'DRA101', name: 'Drama', locat: 'Auditorium', price: '$100', initspace: 5, spaces: 5, taken: 0,imgurl: 'img/books.png'},
        ],
        total: 0
    }
})