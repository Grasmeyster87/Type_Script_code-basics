
export default function helloWorld() {
    console.log("Hello, world!");
  }

export function helloWorld1() {}

export function helloWorldAgain() {}

export namespace Company {
   export function isEmployeeEmail(email: string, domen: string) {
    console.log (email.split('@')[1] === domen);    
    if (email.split('@')[1] === domen){
        return true;
    } else {
        return false;
    }
    }
}

/*
namespace Company {
  export function isEmployeeEmail(email: string, domain: string): boolean {
    return email.endsWith(`@${domain}`);
  }
}
  */