import multer from 'multer'
import { v4 as uuidv4 } from 'uuid';
import path from 'path'

console.log(process.cwd())

const storage = multer.diskStorage({    
    destination: 'temp',
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname));

    }
})
export default multer({ storage });
