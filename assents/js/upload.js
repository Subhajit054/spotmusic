function onGoogleSignIn() {
    const clientId = '955140859892-cjqnnhff51mhphp8tb67mn5ekv0fiq8e.apps.googleusercontent.com';
    const apiKey = 'AIzaSyCp6lXUjhauwFvhlMZL0XsTMV9Kz7hYvb4';
    const scope = 'https://www.googleapis.com/auth/drive.file';

    gapi.load('client:auth2', () => {
        gapi.client.init({
            apiKey: apiKey,
            clientId: clientId,
            scope: scope
        }).then(() => {
            gapi.auth2.getAuthInstance().signIn().then(() => {
                document.getElementById('fileInput').hidden = false;
                document.getElementById('uploadButton').hidden = false;
                alert('Google Sign-In Successful!');
            });
        });
    });
}

document.getElementById('login').addEventListener('click', onGoogleSignIn);

document.getElementById('uploadButton').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const metadata = {
            'name': file.name,
            'mimeType': file.type
        };

        const form = new FormData();
        form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        form.append('file', file);

        fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token}`
            },
            body: form
        }).then(response => response.json()).then(data => {
            alert('File uploaded successfully!');
        }).catch(err => {
            alert('Error uploading file: ' + err);
        });
    }
});
