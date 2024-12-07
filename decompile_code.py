import os
import re

# Path to the large text file produced by your latest compilation script
INPUT_FILE = "all_code_output.txt"

# Use the current directory (the directory where this script resides) as the output root
OUTPUT_ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

# Pattern to identify file boundaries:
# --------------------
# File: filename
# --------------------
FILE_HEADER_PATTERN = re.compile(
    r"^#\s*-+\r?\n#\sFile:\s*(.+)\r?\n#\s*-+\r?\n", 
    re.MULTILINE
)

def decompile_code(input_file, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    with open(input_file, 'r', encoding='utf-8') as infile:
        content = infile.read()
    
    # Split content by file headers
    blocks = re.split(FILE_HEADER_PATTERN, content)

    # blocks[0] = text before first file header
    # blocks[1] = first filename
    # blocks[2] = first file content
    # blocks[3] = second filename
    # blocks[4] = second file content, etc.

    initial_text = blocks[0].strip()
    if initial_text:
        # Save the initial text to changelog.txt if needed
        changelog_path = os.path.join(output_dir, "changelog.txt")
        with open(changelog_path, 'w', encoding='utf-8') as cfile:
            cfile.write(initial_text + "\n")

    # Process each pair of (filename, content)
    for i in range(1, len(blocks), 2):
        fname = blocks[i].strip()
        if i+1 >= len(blocks):
            # No content block found - malformed input?
            break
        fcontent = blocks[i+1].strip()

        # Write out the file
        file_path = os.path.join(output_dir, fname)
        file_dir = os.path.dirname(file_path)
        if not os.path.exists(file_dir):
            os.makedirs(file_dir)

        with open(file_path, 'w', encoding='utf-8') as outfile:
            outfile.write(fcontent + "\n")

    print(f"Decompilation complete. Files recreated in: {output_dir}")

if __name__ == "__main__":
    decompile_code(INPUT_FILE, OUTPUT_ROOT_DIR)
