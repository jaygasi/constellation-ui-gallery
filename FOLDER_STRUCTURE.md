# Constellation UI Gallery - Folder Structure

This document provides a comprehensive overview of the repository folder structure.

## Root Directory

The root directory contains the main configuration and documentation files for the project.

### Configuration Files

- **package.json** - NPM package configuration and dependencies
- **package-lock.json** - Locked versions of NPM dependencies
- **tsconfig.json** - TypeScript compiler configuration
- **tsconfig.build.json** - TypeScript build configuration
- **babel.config.js** - Babel transpiler configuration
- **jest.config.js** - Jest testing framework configuration
- **eslint.config.mjs** - ESLint code linting rules
- **build.config.json** - Build configuration
- **tasks.config.json** - Task runner configuration
- **cspell.json** - Spell checker configuration
- **.prettierrc.json** - Prettier code formatter configuration
- **.prettierignore** - Files to ignore for Prettier
- **.stylelintrc.json** - Stylelint CSS linting configuration
- **.gitignore** - Git ignore patterns
- **.npmrc** - NPM configuration

### Test Configuration

- **setupTests.ts** - Jest test setup and global mocks
- **setupFiles.ts** - Additional test setup files

### Documentation Files

- **README.md** - Main project documentation and setup instructions
- **CODE_OF_CONDUCT.md** - Community code of conduct
- **CONTRIBUTING.md** - Contribution guidelines
- **SECURITY.md** - Security policies and vulnerability reporting
- **LICENSE** - Project license (Apache 2.0)

### Special Directories

- **.devcontainer/** - Development container configuration
- **.github/** - GitHub workflows and actions
- **.storybook/** - Storybook configuration
- **.vscode/** - Visual Studio Code workspace settings

## Source Directory (src/)

The `src/` directory contains the main source code for the project.

### Top-Level Documentation Files

- **GettingStarted.mdx** - Getting started guide for Storybook
- **Libraries.mdx** - Information about libraries used
- **Support.mdx** - Support and help documentation

## Components Directory (src/components/)

The `src/components/` directory contains **46 component folders**, each representing a Pega Constellation DX extension component.

### Typical Component Folder Structure

Each component folder typically contains:

- **index.tsx** - Main component implementation
- **demo.stories.tsx** - Storybook stories for component demos
- **demo.test.tsx** - Jest unit tests for the component
- **Docs.mdx** - Component documentation in MDX format
- **config.json** - Component configuration for Pega Platform
- **styles.ts** - Component-specific styles

### Component List

The repository includes the following 45 extension components plus 1 shared utilities folder:

1. **Pega_Extensions_ActionableButton** - Interactive button component
2. **Pega_Extensions_AutoSave** - Auto-save functionality
3. **Pega_Extensions_Banner** - Banner display component
4. **Pega_Extensions_BannerInput** - Banner with input capabilities
5. **Pega_Extensions_BarCode** - Barcode generation and scanning
6. **Pega_Extensions_Calendar** - Calendar view component
7. **Pega_Extensions_CardGallery** - Card gallery layout
8. **Pega_Extensions_CaseLauncher** - Case launching functionality
9. **Pega_Extensions_CaseReference** - Case reference display
10. **Pega_Extensions_ChatGenAI** - GenAI chat interface
11. **Pega_Extensions_CheckboxRow** - Checkbox row layout
12. **Pega_Extensions_CheckboxTrigger** - Checkbox with trigger actions
13. **Pega_Extensions_CompareTableLayout** - Comparison table layout
14. **Pega_Extensions_DisplayAttachments** - Attachment display component
15. **Pega_Extensions_DisplayPDF** - PDF viewer component
16. **Pega_Extensions_DynamicHierarchicalForm** - Dynamic hierarchical forms
17. **Pega_Extensions_EditableTableLayout** - Editable table component
18. **Pega_Extensions_FieldGroupAsRow** - Field group in row layout
19. **Pega_Extensions_FormFullWidth** - Full-width form template
20. **Pega_Extensions_GanttChart** - Gantt chart for project management
21. **Pega_Extensions_HierarchicalFormAsTasks** - Hierarchical task forms
22. **Pega_Extensions_IframeWrapper** - IFrame integration wrapper
23. **Pega_Extensions_ImageCarousel** - Image carousel component
24. **Pega_Extensions_ImageMagnify** - Image magnification component
25. **Pega_Extensions_JapaneseInput** - Japanese text input
26. **Pega_Extensions_KanbanBoard** - Kanban board for task management
27. **Pega_Extensions_Map** - Map display component
28. **Pega_Extensions_MarkdownInput** - Markdown editor input
29. **Pega_Extensions_MaskedInput** - Masked input field
30. **Pega_Extensions_Meter** - Meter/gauge visualization
31. **Pega_Extensions_NetworkDiagram** - Network diagram visualization
32. **Pega_Extensions_OAuthConnect** - OAuth connection component
33. **Pega_Extensions_PasswordInput** - Password input with visibility toggle
34. **Pega_Extensions_QRCode** - QR code generation
35. **Pega_Extensions_RangeSlider** - Range slider input
36. **Pega_Extensions_RatingLayout** - Rating display layout
37. **Pega_Extensions_Scheduler** - Scheduling component
38. **Pega_Extensions_SecureRichText** - Secure rich text editor
39. **Pega_Extensions_Shortcuts** - Keyboard shortcuts component
40. **Pega_Extensions_SignatureCapture** - Signature capture functionality
41. **Pega_Extensions_StarRatingInput** - Star rating input
42. **Pega_Extensions_StatusBadge** - Status badge display
43. **Pega_Extensions_TaskList** - Task list component
44. **Pega_Extensions_TrendDisplay** - Trend visualization
45. **Pega_Extensions_UtilityList** - Utility list component
46. **shared/** - Shared utilities and helper functions

### Shared Utilities

The `shared/` folder contains:

- **create-nonce.ts** - Utility for creating nonce values (Content Security Policy)

## Project Purpose

This is the **Constellation UI Gallery** repository, which provides a collection of ready-to-use and customizable Constellation DX components for Pega Platform. These components demonstrate best practices for building custom UI components using ReactJS and the Constellation DX API.

### Compatibility

- Version 1.x: Pega '23
- Version 2.x: Pega '24.1
- Current: Compatible with Pega '23.1, '24.1, '24.2, and '25.1

## Development Commands

See README.md for detailed development commands:

- `npm install` - Install dependencies
- `npm run start` - Start Storybook
- `npm run test` - Run unit tests
- `npm run coverage` - Generate test coverage
- `npm run lint` - Lint code
- `npm run fix` - Auto-fix linting issues
- `npm run build-storybook` - Build static Storybook
- `npm run test-storybook` - Run E2E tests
- `npm run buildAllComponents` - Build for production
