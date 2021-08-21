//using the sqlite3
const sqlite3 = require('sqlite3').verbose();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
//connecting to db
readline.question('Pls Provide Product id?', id => {
    readline.close();
    let db = new sqlite3.Database('Sqlite.db', (err) => {
        if (err) {
            console.log(err.message);
        }
        console.log('Connected to database')
    })
    db.serialize(() => {
        db.each(`SELECT * FROM products WHERE ID=${id}`, (err, row) => {
            if (err)
                console.error(err);
            console.log('Selected Product by User:')
            console.table(row);
        });

    })

    db.serialize(() => {
        db.each(`SELECT * FROM PRODUCTS`, (err,row) => {
            if(err)
            {
                console.log(err.message)
            }

            console.log(row);
        })
    })

    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
})








//fire select query
// db.serialize(() => {
//     db.each(`SELECT * FROM COMPANY`, (err,row) => {
//         if(err)
//         {
//             console.log(err.message)
//         }
//         console.log(row);
//         //console.table(row);
//     })
// })

//fire select query
// db.serialize(() => {
//     db.each(`SELECT * FROM PRODUCTS`, (err,row) => {
//         if(err)
//         {
//             console.log(err.message)
//         }
//
//         console.log(row);
//     })
// })


// db.close((err) => {
//     if(err){
//         console.log(err.message);
//     }
//     console.log('DB connection closed')
// })
// let id1=4;
// db.serialize(() => {
//     console.log(prodId)
//     db.get(`SELECT * FROM PRODUCTS WHERE ID=${id1}`, (err, row) => {
//         if (err) {
//             console.log(err.message)
//         }
//
//         console.log(row);
//     })
// })