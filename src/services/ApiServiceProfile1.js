const API_BASE_URL = 'http://localhost:8080';

const apiService = {
    getUserData: async (userId) => {
        const response = await fetch(`${API_BASE_URL}/e-social/users/${userId}`);
        const data = await response.json();
        return data;
    },

    updateUser: async (userId, userData) => {
        const response = await fetch(`${API_BASE_URL}/e-social/users/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const updatedUser = await response.json();
        return updatedUser;
    },
};

export default apiService;
