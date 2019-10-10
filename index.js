
function getDogImages(numPics) {
    fetch('https://dog.ceo/api/breeds/image/random/' + numPics)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => console.log("Something went wrong: " + error));
}

function handleFormSubmit() {
    $("form").submit(function(event) {
        event.preventDefault();
        let numPics = $("input[type=number]").val();
        getDogImages(numPics);
    });
}


function loadApp() {
    console.log("App is loaded! Waiting for submit!");
    handleFormSubmit();
}

$(loadApp());
