# Server Docs

# User Registration
curl -H 'Content-type: application/json' -X POST http://localhost:3001/users -H "Content-Type: application/json" -d '{"first_name":"John", "last_name":"Doe","email":"john.doe@example.com", "password": "mypassword1234"}'

# User Login
curl -H 'Content-type: application/json' -X POST http://localhost:3001/users/login -H "Content-Type: application/json" -d '{"email":"john.doe@example.com", "password": "mypassword1234"}'

# Profile
curl -H 'Content-type: application/json' -H "Authorization: JWT <token>" -X GET http://localhost:3001/users/profile