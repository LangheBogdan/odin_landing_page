# Project Guidelines

Preferred Style Naming Convention = BEM

Blocks, Elements, and Modifiers: A Block refers to a standalone entity that has independent meaning.

Examples
header, container, menu, checkbox, input

Element
An element refers to a part of a block that does not have a standalone meaning and is connected to its block.

Examples
menu item, list item, checkbox caption, header title

Modifier
A modifier refers to a flag on a block or element used to change its appearance or behavior.

Examples
disabled, highlighted, checked, fixed, size big, color yellow

Inspect the project structure. Identify files and directories that should not be tracked by version control, such as build directories, dependency folders, and environment files. Add these to the .gitignore file following best practices.
