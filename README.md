Angular, Typescript, Spring Boot


#Typescript
- create a .ts file
- tsc [filename.ts] to Transpile the Typescript to JavaScript
- tsc --noEmitOnError [file.ts]
    - this will need compile a js file if there are errors

- Compiler flag
    - Getters/Setters only supported in ES5
        - tsc --target ES5 --noEmitOnError [file.ts]

- Compiler Config can use a tsconfig.json so don't have to remember all the Compiler Flags