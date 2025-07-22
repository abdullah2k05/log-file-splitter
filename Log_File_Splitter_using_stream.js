const fs = require('fs');
const readline = require("readline");

const ReadStream = fs.createReadStream("./Log_file_splitter_server.log");
const WriteStream = fs.createWriteStream("log_file_program_output.log");

const rl = readline.createInterface({
  input: ReadStream,
  crlfDelay: Infinity
});

rl.on("line" , (line) =>{
    if(line.includes("ERROR"))
    {
        WriteStream.write(line + "\n");
    }
});

rl.on("close" , () =>{
    console.log("File Written successfully");
})
