import rTabs from '../utils/rTabs';

const codeBlocks = {
    1: rTabs(`
        export class MultiplyTwo extends SmartContract
    `),
    2: rTabs(`
    deploy(args: DeployArgs) { 
        ....
    }
    `),
    3: rTabs(`
    @method update(multiplied: Field) {...}
    `),
    4: rTabs(`
        
    `)
   
}

export default codeBlocks