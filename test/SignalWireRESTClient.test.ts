import {SignalWireRESTClient, SwmlScriptResponse} from "../src";

const client = new SignalWireRESTClient(
    process.env.SIGNALWIRE_SPACE!,
    process.env.SIGNALWIRE_PROJECT_ID!,
    process.env.SIGNALWIRE_API_TOKEN!
)

describe("SignalWireRESTClient REST API Integration", () => {
    it("should find available toll free numbers", async () => {
        const iterator = client.spaceManagement.phoneNumbers
            .searchForAvailablePhoneNumbers({numberType: "toll-free"});

        const numbers = [];
        for await (const number of iterator) {
            numbers.push(number);
        }
        expect(numbers.length).toBeGreaterThan(0);
    });
    it("should retrieve voice logs", async () => {
        const page = await client.voice.logs.listLogsPage({pageSize: 5});
        expect(page.data.length).toBeGreaterThan(0);
        expect(page.nextPageUrl).toBeDefined();
        expect(page.previousPageUrl).toBeUndefined();
        expect(page.hasNextPage).toBeTruthy();
        expect(page.hasPreviousPage).toBeFalsy();
        expect(page.data.length).toBe(5);
        const nextPage = await client.voice.logs.listLogsPage({}, page.nextPageUrl!);
        expect(nextPage.data.length).toBe(5);

        const iterator = client.voice.logs.listLogs();

        const logs = [];
        for await (const log of iterator) {
            logs.push(log);
        }
        expect(logs.length).toBeGreaterThan(0);
    });
    it("should be able to create, update, and delete an API token", async () => {
        const token = await client.project.apiTokens.createApiToken({
            name: 'Test Token',
            permissions: ['calling', 'chat', 'fax', 'management', 'messaging', 'numbers', 'pubsub', 'storage', 'tasking',
                'video']
        });
        expect(token.id).toBeDefined();
        expect(token.name).toBe('Test Token');
        expect(token.permissions).toEqual(['calling', 'chat', 'fax', 'management', 'messaging', 'numbers', 'pubsub',
            'storage', 'tasking', 'video']);

        const updatedToken = await client.project.apiTokens.updateApiToken(token.id, {
            name: 'Updated Token',
            permissions: ['calling', 'chat', 'fax', 'management', 'messaging', 'numbers', 'pubsub', 'storage', 'tasking',
                'video', 'datasphere']
        });
        expect(updatedToken.id).toBeDefined();
        expect(updatedToken.name).toBe('Updated Token');
        expect(updatedToken.permissions).toEqual(['calling', 'chat', 'fax', 'management', 'messaging', 'numbers',
            'pubsub', 'storage', 'tasking', 'video', 'datasphere']);

        await client.project.apiTokens.deleteApiToken(token.id);
    });
    it("should be able to create a chat token", async () => {
        const chatToken = await client.chat.generateChatToken({
            ttl: 10,
            channels: {
                'Test': {
                    read: true,
                    write: true
                }
            }
        });
        expect(chatToken.token).toBeDefined();
    });
    it("should be able to create, update, retrieve, and delete SWML scripts", async () => {
        const initialTestScript = await client.fabric.swmlScripts.createSwmlScript({
            name: "Test Script",
            contents: {
                "version": "1.0.0",
                "sections": {
                    "main": [
                        {
                            "play": "say:Hello from SignalWire!"
                        }
                    ]
                }
            }
        });

        const updatedTestScript = await client.fabric.swmlScripts.updateSwmlScript(initialTestScript.id, {
            name: "Updated Test Script"
        })

        const retrievedScript = await client.fabric.swmlScripts.retrieveSwmlScript(updatedTestScript.id);

        expect(updatedTestScript.swmlScript.displayName).toBe(retrievedScript.swmlScript.displayName);

        const swmlScriptResponses: SwmlScriptResponse[] = []
        for await (const script of client.fabric.swmlScripts.listSwmlScripts()) {
            swmlScriptResponses.push(script);
        }
        expect(swmlScriptResponses.length).toBeGreaterThan(0);
        expect(swmlScriptResponses.find(script => script.id === initialTestScript.id)).toBeDefined();

        const scriptPage = await client.fabric.swmlScripts.listSwmlScriptsPage();
        expect(scriptPage.data.find(script => script.id === initialTestScript.id)).toBeDefined();

        const scriptAddressesIterator = client.fabric.swmlScripts
            .listAddressesForSwmlScript(initialTestScript.id);

        const scriptAddresses = [];
        for await (const address of scriptAddressesIterator) {
            scriptAddresses.push(address);
        }
        expect(scriptAddresses.length).toBeGreaterThan(0);

        const scriptAddressPage = await client.fabric.swmlScripts
            .listAddressesForSwmlScriptPage(initialTestScript.id);
        expect(scriptAddressPage.data.length).toBeGreaterThan(0);

        await client.fabric.swmlScripts.deleteSwmlScript(initialTestScript.id);

        const missingScriptIterator = client.fabric.swmlScripts.listSwmlScripts();
        let missingScript = false;
        for await (const script of missingScriptIterator) {
            if (script.id === initialTestScript.id) {
                missingScript = true;
            }
        }
        expect(missingScript).toBeFalsy();

    });

    it ("should be able to get fabric addresses", async () => {
        const token = await client.fabric.subscribers.createSubscriberToken({
            reference: 'username@example.com'
        });
        expect(token.token).toBeDefined();
        const iterator = client.fabric.address.listAddresses(token.token);
        const addresses = [];
        for await (const address of iterator) {
            addresses.push(address);
        }
        expect(addresses.length).toBeGreaterThan(0);
    });

    it("should be able to create, update, delete, and retrieve a swml webhook", async () => {
       const swmlWebhookResponse = await client.fabric.swmlWebhooks.createSwmlWebhook({
           primaryRequestUrl: "https://example.com/swml-webhook",
       });
       expect(swmlWebhookResponse.id).toBeDefined();
       const iterator = client.fabric.swmlWebhooks.listSwmlWebhooks();

       const swmlWebhookResponses = [];
       for await (const swmlWebhook of iterator) {
           swmlWebhookResponses.push(swmlWebhook);
       }
       expect(swmlWebhookResponses.length).toBeGreaterThan(0);
       expect(swmlWebhookResponses.find(swmlWebhook => swmlWebhook.id === swmlWebhookResponse.id)).toBeDefined();
       const retrievedSwmlWebhookResponse = await client.fabric.swmlWebhooks.retrieveSwmlWebhook(swmlWebhookResponse.id);
       expect(retrievedSwmlWebhookResponse.id).toBeDefined();
       const updatedSwmlWebhookResponse = await client.fabric.swmlWebhooks.updateSwmlWebhook(swmlWebhookResponse.id, {
           name: "Updated Swml Webhook"
       });
       expect(updatedSwmlWebhookResponse.swmlWebhook.name).toBe("Updated Swml Webhook");

       const addressesIterator = client.fabric.swmlWebhooks.listSwmlWebhookAddresses(updatedSwmlWebhookResponse.id);
       const addresses = [];
       for await (const address of addressesIterator) {
           addresses.push(address);
       }

       expect(addresses.length).toBeGreaterThan(0);

       await client.fabric.swmlWebhooks.deleteSwmlWebhook(swmlWebhookResponse.id);
       const missingSwmlWebhookIterator = client.fabric.swmlWebhooks.listSwmlWebhooks();
       let missingSwmlWebhook = false;
       for await (const swmlWebhook of missingSwmlWebhookIterator) {
           if (swmlWebhook.id === swmlWebhookResponse.id) {
               missingSwmlWebhook = true;
           }
       }
       expect(missingSwmlWebhook).toBeFalsy();
    });

    it("should be able to generate a pubsub token", async () => {
        const token = await client.pubsub.tokens.generateToken({
            ttl: 10,
            channels: {
                'Test': {
                    read: true,
                    write: true
                }
            },
            memberId: '1234567890',
            state: {
                test: 'test'
            }
        });
        expect(token.token).toBeDefined();
    })
});