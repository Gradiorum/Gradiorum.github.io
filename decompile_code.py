import os
import re

INPUT_FILE = "all_code_output.txt"
OUTPUT_ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

# Regex to find each file’s boundary in the exported code
FILE_HEADER_PATTERN = re.compile(
    r"^#\s*-+\r?\n#\sFile:\s*(.+)\r?\n#\s*-+\r?\n",
    re.MULTILINE
)

# If you have known extraneous files you do NOT want to recreate, list them here
IGNORED_FILES = [
    # "some_large_file.js",
    # "secret_config.py"
    # etc.
]

def decompile_code(input_file, output_dir):
    # Ensure the output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    # Read the entire big text file
    with open(input_file, 'r', encoding='utf-8') as infile:
        content = infile.read()

    # Split into blocks based on the # File: pattern
    blocks = re.split(FILE_HEADER_PATTERN, content)

    # The text prior to the first file block can be stored in a "changelog.txt"
    initial_text = blocks[0].strip()
    if initial_text:
        changelog_path = os.path.join(output_dir, "changelog.txt")
        with open(changelog_path, 'w', encoding='utf-8') as cfile:
            cfile.write(initial_text + "\n")

    # Each subsequent pair (i, i+1) is (filename, file_contents)
    for i in range(1, len(blocks), 2):
        fname = blocks[i].strip()
        if i+1 >= len(blocks):
            break

        # The content block that belongs to fname
        fcontent = blocks[i+1]

        # If we intentionally want to ignore this file, skip it
        if fname in IGNORED_FILES:
            continue

        # Save it out to the real filesystem
        file_path = os.path.join(output_dir, fname)
        file_dir = os.path.dirname(file_path)

        if not os.path.exists(file_dir):
            os.makedirs(file_dir)

        # Write the file with a UTF-8 encoding
        with open(file_path, 'w', encoding='utf-8') as outfile:
            outfile.write(fcontent.strip() + "\n")

    print(f"Decompilation complete. Files recreated in: {output_dir}")


if __name__ == "__main__":
    decompile_code(INPUT_FILE, OUTPUT_ROOT_DIR)
