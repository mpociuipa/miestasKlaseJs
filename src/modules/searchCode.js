import ajaxService from "./ajaxService";

const searchCode = () => {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
        .then(result => searchResponse = result)
        .then(() => {
            console.log(searchResponse.data[0].post_code);
            document.querySelector('.result').value = searchResponse.data[0].post_code;
        })
        .catch((error) => {
            console.error(error);
            document.querySelector('.result').value = "Error: Address not found";
        });
    });
}

export default searchCode;