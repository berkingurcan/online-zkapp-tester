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
    `),
    2: rTabs(`
    import {
      Field,
      SmartContract,
      state,
      State,
      method,
      DeployArgs,
      Permissions,
    } from 'snarkyjs';
    
    export class MultiplyTwo extends SmartContract {
      // TODO: Create Field State variable 'num'
    
      deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
          ...Permissions.default(),
          editState: Permissions.proofOrSignature(),
        });
        // TODO: Set the num to 4
      }
    
      // TODO: pass the input parameter
      @method update() {
        // TODO: Method: If your input double of the num, set the num its double
      }
    }
    `),
    3: rTabs(`
    import {
      Field,
      SmartContract,
      state,
      State,
      method,
      DeployArgs,
      Poseidon,
      Permissions,
    } from 'snarkyjs';
    
    export class Password extends SmartContract {
      // TODO: Create State Field variable 'x'
    
      deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
          ...Permissions.default(),
          editState: Permissions.proofOrSignature(),
        });
      }
    
      @method initState() {
        // TODO: Set the state x to Poseidon hash of salt and firstSecret(left to right :))
      }
    
      @method updatePassword() {
        // If salt and current secret is valid update the x with updated secret
      }
    }
    `),
    4: rTabs(`
    import {
      method,
      SmartContract,
      PublicKey,
      UInt64,
      DeployArgs,
      Permissions,
    } from 'snarkyjs';
    // IN PRODUCTION :)
    export class SendMINAExample extends SmartContract {
      deploy(args: DeployArgs) {
        super.deploy(args);
        this.setPermissions({
          ...Permissions.default(),
          editState: Permissions.proofOrSignature(),
          editSequenceState: Permissions.proofOrSignature(),
        });
        // TODO: Deploy the zkapp with 10 MINA Balance
      }
    
      @method sendMINA(receiverAddress: PublicKey, amount: UInt64) {
        // TODO: Send amount Mina to receiverAddress
      }
    }
    
    `)
}

export default codes