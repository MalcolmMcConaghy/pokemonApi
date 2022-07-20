document.getElementById('searchForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search').value.toLowerCase();
    fetch(`http://localhost:3000/pokemon/${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById('result').innerHTML = `<p>Name: ${data.name}</p><p>Index: ${data.index}</p><p>Type: ${data.type}</p>`
        });
})