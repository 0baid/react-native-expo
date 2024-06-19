import { Client, Account,ID, Avatars, Databases } from 'react-native-appwrite';
import { UserInterface } from '@/constants/types';
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
    const avatars = new Avatars(client);
    const databases = new Databases(client);


export const createUser = async ({email,password,userName} : UserInterface ) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            userName
        )

        if(!newAccount) throw Error

        const avatarURL = avatars.getInitials(userName)

        await signIn(email,password)


        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId:newAccount.$id,
                email:email,
                userName:userName,
                avatar:avatarURL
            }
        )

        return newUser
    } catch (error) {
        console.log(error)
        throw new Error("Unable to Sign up")
    }
}

export const signIn = async (email:string,password:string) => {
    try {
        const session = await account.createEmailPasswordSession(
            email,password
        )

        return session
    } catch (error) {
        console.log(error)
        throw new Error("Sign In not successfull")
    }
}