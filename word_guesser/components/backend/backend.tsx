import fs from 'fs'


export default function Backend() {

    fs.readFile('./words.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(data)
    })
}

