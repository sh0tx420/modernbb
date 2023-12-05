import PocketBase from "pocketbase";

const pocketbase = new PocketBase(process.env.POCKETBASE_URL);

// @ts-expect-error
export default eventHandler(async (event) => {
    const json = event.toJSON();

    try {
        const userdata = await pocketbase.collection("users")
            .create({
                email: event.headers.get("email"),
                password: event.headers.get("password"),
                passwordConfirm: event.headers.get("confirmpwd")
            });
        
        return userdata;
    }
    catch (error) {
        throw error;
    }

    return "hi";
});
