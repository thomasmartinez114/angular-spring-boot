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
    - To create tsconfig template file
        - tsc --init
        - add "noEmitOnError": true | this will automatically run it so dont got to in the command line
    - Can now just simply run tsc and it will compile all .ts files in the dir

- To remove all .js files from dir run the following to clean them out
    - tsc --build --clean
	
#Angular
- default port is 4200
	- change port >> ng serve --port 5100 --open







