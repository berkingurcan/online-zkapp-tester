const { urlencoded } = require('express');
const express = require('express');
const { executeTest } = require('./executeTest');
const { generateFile } = require('./generateFile');
const { deleteFile } = require('./deleteFile');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        hello: "world"
    });
});

app.post('/run', async (req, res) => {
    const {module, task, code, format} = req.body;

/*     if (module === undefined) {
        return res.status(400).json({success: false, error:"Empty code body!"})
    } */

    if (code === undefined) {
        return res.status(400).json({success: false, error:"Empty code body!"})
    }

    // delete first file
    const deletedFile = await deleteFile();
    // Generate file
    const filepath = await generateFile(format, code);
    // Run and test file an send response
    //const testresult = await executeTest();

    return res.json({filepath});
});

app.listen(5000, () => {
    console.log(`Listening on port 5000!`);
});