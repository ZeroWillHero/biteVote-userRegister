const submitData = async (e) => {
    e.preventDefault();
    const data = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        studentId: document.getElementById('studentId').value,
        password: document.getElementById('password').value,
        phoneNumber: document.getElementById('phone').value,
        address: document.getElementById('address').value,
    };

    try {
        const response = await fetch('https://bitevote-userregister.onrender.com/api/students/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Success:', result);
        window.location.href = 'Success.html';
    } catch (error) {
        console.error('Error:', error);
    }
};