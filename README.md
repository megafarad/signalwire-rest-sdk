# SignalWire REST SDK

The **SignalWire REST SDK** is a TypeScript/JavaScript library designed to work seamlessly with the SignalWire REST API. It provides a comprehensive and easy-to-use interface for developers to interact with SignalWire's offerings, including features such as calls, messages, video conferencing, and much more.

---

## Features

- **Platform Support**: Works in both Node.js and browser environments.
- **Namespaces**: Organized functionality around SignalWire features like calling, messaging, video, managing campaigns and brands, etc.
- **Typed SDK**: Built using TypeScript for better developer experience and type safety.
- **Request Handling**: Simplified API interactions using `axios`.

---

## Installation

To install the SDK via npm:

```bash
npm install @sirhc77/signalwire-rest-sdk
```

---

## Setup

1. Create an `.env` file to securely manage your credentials:
   ```
   PROJECT_ID=<your_project_id>
   TOKEN=<your_auth_token>
   SIGNALWIRE_SPACE=<your_signalwire_space>
   ```

2. Import and initialize the SDK in your code:

   ```typescript
   import { SignalWireRESTClient } from 'signalwire-rest-sdk';

   const client = new SignalWireRESTClient(
     process.env.SIGNALWIRE_SPACE!,
     process.env.PROJECT_ID!,
     process.env.TOKEN!
   );
   ```

3. Example usage (e.g., sending a request):

   ```typescript
   const document = await client.datasphere.documents.createDocument({
            chunkingStrategy: 'sentence',
            url: 'https://ontheline.trincoll.edu/images/bookdown/sample-local-pdf.pdf',
            tags: ['test']
        });

   console.log('Created Document:', document);
   ```

---

## Usage Overview

### 1. **Namespaces**

The SDK organizes functionality into key namespaces. Here are some of the namespaces available and their common use-cases:

| **Namespace**      | **Description**                                                                                       |
|--------------------|-------------------------------------------------------------------------------------------------------|
| `calling`          | Manage and interact with calls (e.g., create and update calls).                                       |
| `video`            | Handle video conferencing, recording, room sessions, and tokens.                                      |
| `message`          | Access to SMS logs.                                                                                   |
| `fax`              | Access to fax logs.                                                                                   |
| `voice`            | Access to voice logs.                                                                                 |
| `project`          | Manage API tokens.                                                                                    |
| `chat`             | Generate a chat token.                                                                                |
| `datasphere`       | Manage documents and their metadata within the Datasphere.                                            |
| `spaceManagement`  | Perform administrative tasks like handling MFA (multi-factor authentication) and verified caller IDs. |
| `fabric`           | Interact with SignalWire fabric resources (e.g., allocate resources for interoperability).            |
| `pubsub`           | Generate PubSub tokens for authentication for the PubSub service                                      |

### 2. **Initialization Parameters**
The `SignalWireRESTClient` constructor requires the following parameters:
- **SignalWire Space** (e.g., `your-space.signalwire.com`).
- **Project ID** from SignalWire dashboard.
- **Token** for basic authentication.
- **Optional Configuration** such as custom Axios settings.

---

## API Examples

### 1. **Multi-Factor Authentication (MFA)**

Requesting an MFA token via SMS:

```typescript
const result = await client.spaceManagement.multiFactorAuthentication.requestMfaTokenViaText({
    to: "+12065550123",
    from: "+14255558073",
    message: "Your SignalWire MFA token is:",
    tokenLength: 6
});

console.log(result);
```

### 2. **Voice Call Management**

Create a call using the `calling` namespace:

```typescript
const call = await client.calling.calls.createCall({
   type: 'swml',
   command: 'dial',
   params: {
      from: '+14255550710',
      to: '+12065550123',
      swml: {
         version: '1.0.0',
         sections: {
            main: [
               {
                  'detect_machine': {
                     'wait': true
                  }
               },
               {
                  'play': 'say:Hello from SignalWire!'
               },
               {
                  'hangup': {}
               }
            ]
         }
      }
   }
});
console.log(call);
```

---

## Development

### Requirements

- Node.js >= 18
- TypeScript >= 5.8
- Dependencies managed using npm

### Commands

| **Script**            | **Description**                                     |
|-----------------------|-----------------------------------------------------|
| `npm install`         | Install dependencies                                |
| `npm run build`       | Compile the TypeScript source files to JavaScript   |
| `jest`                | Run unit tests using Jest                          |

---

## Contributing

We welcome contributions! To get started:

1. Fork the repository.
2. Clone your fork and create a new feature branch.
3. Commit and push your changes to the branch.
4. Open a pull request, describing the changes made.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Support

For questions, issues, or feature requests, please open an [issue](https://github.com/megafarad/signalwire-rest-sdk/issues) on the GitHub repository.