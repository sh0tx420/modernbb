const useAuthStore = defineStore("AuthStore", {
    state: () => ({
        isOpen: false,
        currentTab: 0,
        authentication: {
            register: {
                username: null,
                password: null,
                confirmpwd: null
            },
            passwordVisible: false
        }
    })
});

export default useAuthStore;