# Blockchain Project

Full-stack blockchain implementation with Angular web interface and Node.js backend for cryptocurrency transactions and blockchain management.

## Project Structure

```
Blockchain/
├── savjeecoin/              - Angular frontend application with server-side rendering
│   ├── src/
│   │   ├── app/            - Angular components, pages, and services
│   │   │   ├── pages/      - Blockchain viewer, transaction creation, pending transactions
│   │   │   ├── components/ - Reusable block-view and transactions-table components
│   │   │   ├── services/   - Blockchain service layer
│   │   │   └── page/       - Settings page
│   │   └── main.ts         - Application entry point
│   └── package.json        - Angular dependencies
├── src/                     - Backend blockchain logic
│   ├── blockchain.js       - Core blockchain implementation
│   ├── keygenerator.js     - Cryptographic key generation
│   ├── main.js             - Backend server entry point
│   └── 1                   - Key file (NOT committed to git)
├── package.json            - Root project dependencies
└── .gitignore             - Git ignore rules for security

```

## What's Included

### Frontend (Angular 21)
- Server-Side Rendering (SSR) enabled for improved performance
- TypeScript with strict mode configuration
- Bootstrap 5.3.8 for responsive UI design
- Tailwind CSS utility-first styling
- Pages for blockchain viewing, transaction creation, and settings
- Reusable components for block visualization and transaction display
- Blockchain service for API communication
- Vitest configured for unit testing

### Backend
- blockchain.js: Core blockchain logic including block creation, validation, chain management, and mining
- keygenerator.js: Cryptographic operations with EC key pair generation and digital signatures
- main.js: Backend server setup
- Express.js for API endpoints

### Cryptography
- Elliptic v6.6.1 for elliptic curve cryptography (ECDSA)
- crypto-js for hashing and encryption operations
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

Angular build configuration is in savjeecoin/angular.json
TypeScript configuration is in savjeecoin/tsconfig.json
Production builds are automatically optimized by Angular CLI
Tailwind CSS is configured for utility-first styling

## Testing

Run unit tests with Vitest:
```bash
cd savjeecoin
npm test
npm test -- --watch
```

## Dependencies

Frontend Libraries:
- Angular: @angular/common, @angular/core, @angular/forms, @angular/router v21.2.0
- Angular SSR: @angular/ssr v21.2.1
- Bootstrap: v5.3.8
- RxJS: v7.8.0
- Tailwind CSS: v4.1.12

Backend Libraries:
- Express: v5.1.0
- Elliptic: v6.6.1
- crypto-js: v4.2.0

Development Tools:
- TypeScript: v5.9.2
- Vitest: v4.0.8
- Prettier: v3.8.1
- PostCSS: v8.5.3

## Technical Resume

Full-stack blockchain application with Angular 21 frontend and Node.js backend. Demonstrates expertise in modern web technologies and cryptographic systems.

Technology: Angular 21, TypeScript, Node.js, Express.js, Bootstrap, Tailwind CSS, RxJS, Elliptic Curve Cryptography (ECDSA)

Key Features:
- Server-side rendering for performance optimization
- Component-based architecture with service layer pattern
- Blockchain implementation with block validation and mining
- Digital signature verification using ECDSA
- Responsive UI with reusable components
- Unit testing with Vitest
- Production build optimization

Skills Demonstrated: Full-stack development, cryptographic systems, REST APIs, component architecture, version control, security best practices

## Future Development

When resuming work on this project:
1. Run npm update to refresh dependencies
2. Review this README for project structure overview
3. Check .gitignore before committing any files
4. Generate new cryptographic keys for testing
5. Ensure .env files are properly configured with necessary variables
6. Rebuild node_modules if not present in the repository

## Repository

GitHub: https://github.com/Aditbise/Blockchain

Last Updated: 2026-03-13
Frontend Framework: Angular 21 with Server-Side Rendering
Backend Runtime: Node.js
Cryptography Method: Elliptic Curve Digital Signature Algorithm (ECDSA)
