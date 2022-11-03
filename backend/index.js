const { urlencoded } = require('express');
const express = require('express');
const path = require('path');
const { executeTest } = require('./executeTest');
const { generateFile } = require('./generateFile');
const { deleteFile } = require('./deleteFile');
const { readReport } = require('./readReport');
const { deleteReport } = require('./deleteReport');
const { runCLI } = require('jest');
// const { ProjectConfig } = require('jest');

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
    // Run and test file write repo/module0/output.txt
    // const testresult = await executeTest();
    // read output.txt and return as a response
    // delete

    const projectRootPath = path.join(__dirname, './repo');
    
    const jestConfig = {
        roots: ['./module0/src'],
        testRegex: '\\Add.test\\.ts$',
        verbose: true,
        preset: 'ts-jest/presets/default-esm',
        testEnvironment: 'node',
        globals: {
          'ts-jest': {
            useESM: true,
          },
        },
        transform: {
          '^.+\\.(t)s$': 'ts-jest',
          '^.+\\.(j)s$': 'babel-jest',
        },
        resolver: '<rootDir>/jest-resolver.cjs',
        transformIgnorePatterns: [
          '<rootDir>/node_modules/(?!snarkyjs/node_modules/tslib)',
        ],
    };

    const result = await runCLI(jestConfig , [projectRootPath]);

    return res.json({result});
});

app.listen(5000, () => {
    console.log(`Listening on port 5000!`);
});