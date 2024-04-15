# Docs

# register a user
curl -H 'Content-type: application/json' -X POST http://localhost:3001/users -H "Content-Type: application/json" -d '{"first_name":"John", "last_name":"Doe","email":"john.doe@example.com", "password": "mypassword1234"}'

# login a user
curl -H 'Content-type: application/json' -X POST http://localhost:3001/users/login -H "Content-Type: application/json" -d '{"email":"john.doe@example.com", "password": "mypassword1234"}'