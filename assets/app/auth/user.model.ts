export class User {
    constructor(public email: string,
                public password: string,
                public firstName?: string,
                public lastName?: string) {}
}

// the above format is an alternate way of writing the same thing that is seen in message.model.ts
// question mark makes those properties optional