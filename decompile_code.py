import os
import re

INPUT_FILE = "all_code_output.txt"
OUTPUT_ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

FILE_HEADER_PATTERN = re.compile(
    r"^#\s*-+\r?\n#\sFile:\s*(.+)\r?\n#\s*-+\r?\n",
    re.MULTILINE
)

IGNORED_FILES = []  # Add filenames to ignore if needed.

def decompile_code(input_file, output_dir):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    with open(input_file, 'r', encoding='utf-8') as infile:
        content = infile.read()
    
    blocks = re.split(FILE_HEADER_PATTERN, content)

    initial_text = blocks[0].strip()
    if initial_text:
        changelog_path = os.path.join(output_dir, "changelog.txt")
        with open(changelog_path, 'w', encoding='utf-8') as cfile:
            cfile.write(initial_text + "\n")

    for i in range(1, len(blocks), 2):
        fname = blocks[i].strip()
        if fname in IGNORED_FILES:
            continue
        if i+1 >= len(blocks):
            break
        fcontent = blocks[i+1].strip()

        file_path = os.path.join(output_dir, fname)
        file_dir = os.path.dirname(file_path)
        if not os.path.exists(file_dir):
            os.makedirs(file_dir)

        with open(file_path, 'w', encoding='utf-8') as outfile:
            outfile.write(fcontent + "\n")

    print(f"Decompilation complete. Files recreated in: {output_dir}")

if __name__ == "__main__":
    decompile_code(INPUT_FILE, OUTPUT_ROOT_DIR)
