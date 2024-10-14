import os

def export_code(output_filename='all_code_output.txt'):
    # Define the file extensions you want to include
    included_extensions = {'.js', '.html', '.css', '.json', '.py', '.md'}

    # Define directories to exclude
    excluded_dirs = {'venv', '__pycache__', 'node_modules', 'browser-extension/data', '.git'}

    code_files = []
    for root, dirs, files in os.walk('.'):
        # Modify dirs in-place to skip excluded directories
        dirs[:] = [d for d in dirs if d not in excluded_dirs]
        
        for file in files:
            file_ext = os.path.splitext(file)[1].lower()
            if file_ext in included_extensions:
                code_files.append(os.path.join(root, file))

    all_code = ''
    for file_path in code_files:
        # Normalize the file path for better readability
        normalized_path = os.path.relpath(file_path, '.')
        all_code += f"\n# {'-'*20}\n# File: {normalized_path}\n# {'-'*20}\n\n"
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                code = f.read()
                all_code += code + "\n"
        except (UnicodeDecodeError, PermissionError) as e:
            all_code += f"// Could not read file: {e}\n"

    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(all_code)

    print(f"All code has been exported to {output_filename}")

if __name__ == "__main__":
    export_code()
