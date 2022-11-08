import rTabs from '../utils/rTabs';

const codes = {
    1: rTabs(`
    import {
        Field,
        SmartContract,
        state,
        State,
        method,
        DeployArgs,
        Permissions,
      } from 'snarkyjs';
      
      export class Add extends SmartContract {
        @state(Field) num = State<Field>();
      
        deploy(args: DeployArgs) {
          super.deploy(args);
          this.setPermissions({
            ...Permissions.default(),
            editState: Permissions.proofOrSignature(),
          });
        }
      
        @method init() {
          this.num.set(Field(1));
        }
      
        @method update() {
          const currentState = this.num.get();
          this.num.assertEquals(currentState); // precondition that links this.num.get() to the actual on-chain state
          const newState = currentState.add(2);
          newState.assertEquals(currentState.add(2));
          this.num.set(newState);
        }
      }      
    `)
}

export default codes