import { Client, Account,ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.obaid.aura",
    projectId: "667273b00034a8906c8c",
    databaseId: "667276ca0030d89667ee",
    userCollectionId: "6672773a00261c2c22be",
    videoCollectionId: "66727779000436bb4f05",
    storageId: "6672798a0011e46e23d2"
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
    ;
    const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        }); 
}
