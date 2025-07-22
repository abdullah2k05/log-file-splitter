# Log File Splitter 🔍

## 📖 Description
This mini project is built using Node.js to demonstrate the concept and use of **streams**. The script reads a large log file (`log_file_splitter_server.log`) line by line and extracts only the lines that contain the keyword `"ERROR"`. These lines are written into a new file called `log_file_program_output.log`.

It's a beginner-friendly project aimed at understanding:
- File system module (`fs`)
- Read and write streams
- The `readline` module
- The concept of piping and handling large files efficiently without loading the whole file into memory

---

## 🚀 How It Works
- Uses `fs.createReadStream()` to read the log file.
- Uses `readline` to process each line one by one.
- Checks if the line contains `"ERROR"`.
- Writes matching lines to a new file using `fs.createWriteStream()`.

---

## 📦 Modules Used
- `fs` (File System)
- `readline`
