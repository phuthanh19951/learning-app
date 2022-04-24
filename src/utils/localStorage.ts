export const authenWithRandomUser = async () => {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        await fetch(`http://localhost:3000/users/fake-login`, {
            method: 'POST'
        })
            .then(response => response.json())
            .then(result => {
                if (result && result.data) {
                    localStorage.setItem('currentUser', JSON.stringify(result.data));
                }
            });
    }
};

export const getCurrentUser = () => {
    const currentUser = localStorage.getItem('currentUser') || '';
    return currentUser ? JSON.parse(currentUser) : '';
};