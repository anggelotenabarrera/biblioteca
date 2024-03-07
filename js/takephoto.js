        // Función para previsualizar la imagen tomada
        function previewPhoto(event) {
            const preview = document.createElement('img');
            preview.style.width = '100px'; // Ajustar el tamaño de la vista previa según sea necesario
            preview.style.height = 'auto'; // Ajustar el tamaño de la vista previa según sea necesario
            preview.src = URL.createObjectURL(event.target.files[0]);
            document.body.appendChild(preview);
        }

        const photoInput = document.getElementById('photoInput');
        photoInput.addEventListener('change', previewPhoto);