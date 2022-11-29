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
    @method updatePassword(salt: Field, secret: Field, updatedPassword: Field) {...}
    `),
    5: rTabs(`
    this.balance.addInPlace(UInt64.from(5_000_000_000));
    `),
    6: rTabs(`
    deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
          ...Permissions.default(),
          editState: Permissions.proofOrSignature(),
          editSequenceState: Permissions.proofOrSignature(),
        });
    }
    `)
   
}

export default codeBlocks