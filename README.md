# Blockchain Project

Full-stack blockchain implementation with Angular 21 web interface and Node.js backend for cryptocurrency transactions and blockchain management.

## Project Structure

```
Blockchain/
├── savjeecoin/              - Angular frontend application with server-side rendering
│   ├── src/
│   │   ├── app/            - Angular components, pages, and services
│   │   │   ├── pages/      - Blockchain viewer, transaction creation, pending transactions
│   │   │   ├── components/ - Reusable block-view and transactions-table components
│   │   │   ├── services/   - Blockchain service layer
│   │   │   └── page/       - Settings page configuration
│   │   ├── main.ts         - Application entry point
│   │   ├── main.server.ts  - Server-side rendering entry point
│   │   ├── server.ts       - SSR server configuration
│   │   └── styles.css      - Global styles
│   ├── angular.json        - Angular CLI configuration
│   ├── tsconfig.json       - TypeScript configuration
│   └── package.json        - Angular dependencies
├── src/                     - Backend blockchain logic
│   ├── blockchain.js       - Core blockchain implementation
│   ├── keygenerator.js     - Cryptographic key generation
│   └── main.js             - Backend server entry point
├── package.json            - Root project dependencies
└── .gitignore             - Git ignore rules for security

```

## What's Included

### Frontend (Angular 21)
- Server-Side Rendering (SSR) enabled with Express.js server integration
- TypeScript with strict mode configuration
- Bootstrap 5.3.8 for responsive UI components
- Tailwind CSS 4.1.12 utility-first styling
- Pages for blockchain viewing, transaction creation, and pending transactions management
- Reusable components:
  - `block-view`: Block visualization component
  - `transactions-table`: Transaction display component
- Blockchain service for backend API communication
- Vitest configured for unit testing
- Angular standalone components and routing

### Backend
- **blockchain.js**: Core blockchain logic including:
  - Block creation and validation
  - Chain management and mining
  - Transaction processing and verification
- **keygenerator.js**: Cryptographic operations with:
  - EC key pair generation
  - Digital signature creation and verification
- **main.js**: Backend server setup with Express.js
- **Express.js v5.1.0**: REST API endpoints for blockchain operations

### Cryptography
- Elliptic v6.6.1 for elliptic curve cryptography (ECDSA)
- crypto-js v4.2.0 for hashing and encryption operations
- Node.js built-in crypto module for additional security operations

## What's NOT Included

### Security and Keys
- Private and public keys are not committed to git per .gitignore rules
- Files excluded: src/1, *.key, *.pem
- Private key file was removed from git history on 2026-03-13

### Build and Dependencies
- node_modules directory must be installed with npm install
- dist/ directory generated after building (not committed)
- .angular/cache/ Angular compilation cache (not committed)

### Environment Configuration
- .env and .env.local files for sensitive data (not committed)
- Database connection strings should be in environment variables
- API keys and credentials stored in .env (not committed)

### IDE Files
- .vscode/ local settings (some files tracked, others ignored)
- .idea/ IntelliJ IDEA files (not committed)

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 11.4.1 or higher
- Git for version control

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Aditbise/Blockchain.git
   cd Blockchain
   ```

2. Install dependencies
   ```bash
   npm install
   cd savjeecoin
   npm install
   cd ..
   ```

3. Generate cryptographic keys if needed
   - Modify keygenerator.js to generate new keys
   - Keys will be created in src/1 (this file is in .gitignore)

4. Start development servers
   - Backend: node src/main.js
   - Frontend: cd savjeecoin && npm start

### Available Commands

Frontend commands (from savjeecoin/ directory):
```
npm start                    - Start development server on http://localhost:4200
npm run build               - Build for production
npm run watch               - Build in watch mode
npm test                    - Run unit tests with Vitest
npm run serve:ssr:savjeecoin - Run server-side rendering server
```

Backend commands:
```
node src/main.js            - Start blockchain server
node src/keygenerator.js    - Generate new cryptographic keys
```

## Security Notes

### Important Security Practices

Private Keys
- Never commit private keys to git
- Use .env files for sensitive configuration data
- Regenerate keys if accidentally exposed
- Files that are automatically ignored: src/1, *.key, *.pem

Environment Variables
- Create .env.local for local development configuration
- Never commit .env files to version control
- Use KEY=value format for environment variables

Secrets Management
- Store database credentials in .env
- Do not hardcode API keys in source code
- Use environment variables for all sensitive configuration

Git History
- Initial private key file was removed from git history on 2026-03-13
- Use git filter-branch if sensitive data is accidentally committed
- Use git push --force to update remote after history rewrite

## Configuration

- Angular build configuration: savjeecoin/angular.json
- TypeScript configuration: savjeecoin/tsconfig.json
- TypeScript spec testing configuration: savjeecoin/tsconfig.spec.json
- Production builds are automatically optimized by Angular CLI
- Tailwind CSS is configured for utility-first styling in savjeecoin/.postcssrc.json
- Code formatting with Prettier: savjeecoin/.prettierrc

## Testing

Run unit tests with Vitest:
```bash
cd savjeecoin
npm test
npm test -- --watch
```

## Dependencies

Frontend Libraries:
- Angular: @angular/common, @angular/core, @angular/forms, @angular/platform-browser, @angular/platform-server, @angular/router v21.2.0
- Angular SSR: @angular/ssr v21.2.1
- Angular Build Tools: @angular/build v21.2.1, @angular/cli v21.2.1, @angular/compiler-cli v21.2.0
- Bootstrap: v5.3.8
- RxJS: v7.8.0
- Tailwind CSS: v4.1.12 with @tailwindcss/postcss v4.1.12

Backend Libraries:
- Express: v5.1.0
- Elliptic: v6.6.1
- crypto-js: v4.2.0

Development Tools:
- TypeScript: v5.9.2
- Vitest: v4.0.8
- Prettier: v3.8.1
- PostCSS: v8.5.3
- @types packages for Node.js, Express, and Elliptic

## Project Architecture

### Frontend Architecture
- **Standalone Components**: Uses Angular's standalone API for modern component structure
- **Service-Based**: Blockchain service handles all backend communication
- **Server-Side Rendering**: Full SSR support with Express.js integration for improved performance and SEO

### Backend Architecture
- **Modular Design**: Separate modules for blockchain logic and cryptography
- **Express Routes**: RESTful API endpoints for blockchain operations
- **Cryptographic Security**: ECDSA-based digital signatures for transaction validation

## Technical Resume

Full-stack blockchain application with Angular 21 frontend and Node.js backend. Demonstrates expertise in modern web technologies, cryptographic systems, and production-ready patterns.

**Technology Stack**: Angular 21, TypeScript 5.9, Node.js, Express.js 5.1, Bootstrap 5.3, Tailwind CSS 4.1, RxJS 7.8, Elliptic Curve Cryptography (ECDSA)

**Key Features**:
- Server-side rendering with Express.js integration for performance optimization
- Standalone component architecture with service layer pattern
- Full blockchain implementation with block validation and mining
- Digital signature verification using ECDSA (Elliptic Curve Digital Signature Algorithm)
- Responsive UI with reusable, well-tested components
- Comprehensive unit testing with Vitest
- Production build optimization with Angular CLI

**Skills Demonstrated**: Full-stack development, cryptographic systems, REST APIs, component architecture, server-side rendering, version control, security best practices, modern Angular patterns

## Future Development

When resuming work on this project:
1. Run npm update to refresh dependencies
2. Review this README for project structure overview
3. Check .gitignore before committing any files
4. Generate new cryptographic keys for testing
5. Ensure .env files are properly configured with necessary variables
6. Rebuild node_modules if not present in the repository
7. Test both backend (node src/main.js) and frontend (cd savjeecoin && npm start) servers

## Repository

GitHub: https://github.com/Aditbise/Blockchain

Last Updated: 2026-06-03
Frontend Framework: Angular 21 with Server-Side Rendering
Backend Runtime: Node.js with Express.js
Cryptography Method: Elliptic Curve Digital Signature Algorithm (ECDSA)
