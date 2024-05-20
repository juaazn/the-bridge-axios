const setUsers = document.querySelector('#conten_users')
const lookUsers = document.querySelector('#users')

let listUsers = []

axios.get('https://jsonplaceholder.typicode.com/users')
	.then(res => {
		const { data } = res
		listUsers = data
	})
	.catch(err => console.log(err))

function users() {
	listUsers.forEach(e => {
		setUsers.innerHTML += `
			<h3>${e.username}</h3>
		`
	})
}

lookUsers.addEventListener('click', users)
