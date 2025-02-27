import os

def export_code(output_filename='all_code_output.txt'):
    # Extensions you genuinely want to export
    included_extensions = {
        '.js', '.html', '.css', '.json', '.py', '.md', '.jsx','yml'
    }

    # Directories to skip altogether
    excluded_dirs = {
        'venv',
        '__pycache__',
        'node_modules',
        'browser-extension',
        '.git',
        '.vercel',
        '.next',
        'dist',
        'build',
        'out',
        'coverage'
    }

    # Files to skip specifically
    excluded_files = {
        'all_code_output.txt',  # So we don't re-include the export file
        'package-lock.json',    # Example—skip if you don’t want it
        'yarn.lock',            # Example if you use Yarn
        # Add more if needed
    }

    code_files = []

    # Recursively walk the current directory
    for root, dirs, files in os.walk('.'):
        # Filter out any excluded directories
        dirs[:] = [d for d in dirs if d not in excluded_dirs]

        for file in files:
            file_ext = os.path.splitext(file)[1].lower()
            filename_only = os.path.basename(file)

            # Skip if file is in the excluded_files set
            if filename_only in excluded_files:
                continue

            # Only include recognized extensions
            if file_ext in included_extensions:
                file_path = os.path.join(root, file)
                code_files.append(file_path)

    all_code = []
    for file_path in code_files:
        # Relpath is purely for display in the output
        normalized_path = os.path.relpath(file_path, '.')

        # Start building up the final output string
        header = f"\n# {'-'*20}\n# File: {normalized_path}\n# {'-'*20}\n\n"
        all_code.append(header)

        # Attempt to read the file’s contents
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                contents = f.read()
            all_code.append(contents + "\n")
        except (UnicodeDecodeError, PermissionError) as e:
            all_code.append(f"// Could not read file: {e}\n")

    # Join everything into one large text block
    final_output = "".join(all_code)

    # Write the final output
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write(final_output)

    print(f"All code has been exported to {output_filename}")


if __name__ == "__main__":
    export_code()
