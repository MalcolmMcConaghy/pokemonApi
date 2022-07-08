document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search').value.toLowerCase();
    fetch(`http://localhost:3000/search/${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `<p>Name: ${data[0].name}</p><p>Index: ${data[0].index}</p><p>Type: ${data[0].type}</p>`
        });
})