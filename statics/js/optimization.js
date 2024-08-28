const slider = document.getElementById( "fontSize" );
const output = document.querySelector( ".slider-value" );
const colorInput = document.getElementById( "fontColor" );
const colorValue = document.querySelector( ".color-value" );
const user = document.querySelector( ".user" );
const menu = document.querySelector( ".menu" );
const selected_video = document.querySelector( ".selected_video" );
const selected_mp3 = document.querySelector( ".selected_mp3" );
const selected_transcribe = document.querySelector( ".selected_transcribe" );
const selected_font = document.querySelector( ".selected_font" );
const videoUploader = document.getElementById( "video" );
const mp3Uploader = document.getElementById( "mp3" );
const fontUploader = document.getElementById( "font" );
const transcribeUploader = document.getElementById( "transcribed" );
const subtitlesBackgroundColorInput = document.getElementById( "subtitles-background" );
const subtitlesBackgroundColorValue = document.querySelector( ".subtitles-background-color-value" );

slider.oninput = function () {
    output.textContent = this.value;
}

slider.addEventListener( "input", updateSliderValue );

function videoFileReader() {
    if (this.files.length === 1) {
        selected_video.innerHTML = this.files[0]?.name
    }
    //handler video file here
}

function mp3FileReader() {
    if (this.files.length === 1) {
        selected_mp3.innerHTML = this.files[0]?.name
    }
    //handler mp3 file here
}

function transcribedFileReader() {
    if (this.files.length === 1) {
        selected_transcribe.innerHTML = this.files[0]?.name
    }
    //handler transcribe file here
}

function fontFileReader() {
    if (this.files.length === 1) {
        selected_font.innerHTML = this.files[0]?.name
    }
    //handler font file here
}
videoUploader.addEventListener("change", videoFileReader)
mp3Uploader.addEventListener("change", mp3FileReader)
transcribeUploader.addEventListener("change", transcribedFileReader)
fontUploader.addEventListener("change", fontFileReader)

function updateSliderValue() {
    const value = ( slider.value - slider.min ) / ( slider.max - slider.min ) * 100;
    slider.style.background = `linear-gradient(to right, #c4f053 0%, #c4f053 ${ value }%, #e0e0e0 ${ value }%, #e0e0e0 100%)`;
    console.log(slider.style.background, "NNNNNNNNNNNNNN", value)
    output.textContent = slider.value;
}

colorInput.addEventListener( "input", function () {
    colorValue.textContent = this.value;
} );

subtitlesBackgroundColorInput.addEventListener( "input", function () {
    subtitlesBackgroundColorValue.textContent = this.value;
} );

user.addEventListener( "click", function () {
    if ( menu.style.display === "block" ) {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"
    }
} );


document.addEventListener('DOMContentLoaded', () => {
    const videoInput = document.getElementById('video');
    const mp3Input = document.getElementById('mp3');
    const transcribedInput = document.getElementById('transcribed');
    const fontInput = document.getElementById('font');
    const fontColorInput = document.getElementById('fontColor');
    const subtitlesBackgroundInput = document.getElementById('subtitles-background');
    const fontSizeInput = document.getElementById('fontSize');
    const processButton = document.getElementById('processButton');

    const updateFileLabel = (input, label) => {
        const fileName = input.files.length > 0 ? input.files[0].name : 'No file chosen';
        label.textContent = fileName;
    };

    videoInput.addEventListener('change', () => updateFileLabel(videoInput, document.querySelector('.selected_video')));
    mp3Input.addEventListener('change', () => updateFileLabel(mp3Input, document.querySelector('.selected_mp3')));
    transcribedInput.addEventListener('change', () => updateFileLabel(transcribedInput, document.querySelector('.selected_transcribe')));
    fontInput.addEventListener('change', () => updateFileLabel(fontInput, document.querySelector('.selected_font')));

    fontSizeInput.addEventListener('input', (e) => {
        document.querySelector('.slider-value').textContent = e.target.value;
    });

    processButton.addEventListener('click', () => {
        const formData = new FormData();
        formData.append('video_file', videoInput.files[0]);
        formData.append('mp3_file', mp3Input.files[0]);
        formData.append('text_file', transcribedInput.files[0]);
        formData.append('font_file', fontInput.files[0]);
        formData.append('font_size', fontSizeInput.value);
        formData.append('font_color', fontColorInput.value);
        formData.append('bg_color', subtitlesBackgroundInput.value);

        fetch('/process', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Update the preview or display success message
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});



// // scripts.js
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('processButton').addEventListener('click', function() {
//       // Create a FormData object to handle form data if needed
//       var formData = new FormData();
  
//       // Optionally, you can append form data here
//       // Example: formData.append('fontSize', document.getElementById('fontSize').value);
  
//       fetch('/process', {
//         method: 'POST',
//         body: formData
//       })
//       .then(response => response.json())
//       .then(data => {
//         // Handle the response data
//         console.log('Success:', data);
//         // You can update the page or provide feedback to the user here
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//     });
//   });
  