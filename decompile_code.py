import os
import re

# Path to the large text file produced by your latest compilation script
INPUT_FILE = "all_code_output.txt"

# Directory where you want to recreate the files for the current project
OUTPUT_ROOT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "Gradiorum")

# New pattern to identify file boundaries:
# The file headers look like:
# --------------------
# File: filename
# --------------------
# We'll match this pattern and capture the filename.
FILE_HEADER_PATTERN = re.compile(
    r"^#\s*-+\r?\n#\sFile:\s*(.+)\r?\n#\s*-+\r?\n", 
    re.MULTILINE
)

def decompile_code(input_file, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Read the entire compiled file
    with open(input_file, 'r', encoding='utf-8') as infile:
        content = infile.read()
    
    # Find all file headers and their indices
    # This is optional—it's just to gather filenames. The main logic uses re.split.
    files = FILE_HEADER_PATTERN.findall(content)

    # Split on file boundaries
    blocks = re.split(FILE_HEADER_PATTERN, content)

    # The structure after split is:
    # blocks[0] = text before first file header
    # blocks[1] = first filename
    # blocks[2] = first file content
    # blocks[3] = second filename
    # blocks[4] = second file content
    # ... and so on

    initial_text = blocks[0].strip()
    if initial_text:
        # Save initial text to changelog.txt if there's any text before the first file header
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

        # Write out the file directly without modifications to filename
        file_path = os.path.join(output_dir, fname)
        file_dir = os.path.dirname(file_path)
        if not os.path.exists(file_dir):
            os.makedirs(file_dir)

        with open(file_path, 'w', encoding='utf-8') as outfile:
            outfile.write(fcontent + "\n")

    print(f"Decompilation complete. Files recreated in: {output_dir}")

if __name__ == "__main__":
    decompile_code(INPUT_FILE, OUTPUT_ROOT_DIR)
